using System.Threading.RateLimiting;
using Portfolio.Backend;

var builder = WebApplication.CreateBuilder(args);
if (string.IsNullOrWhiteSpace(builder.Configuration["FORMSPREE_FORM_ID"]))
    builder.Configuration.AddUserSecrets<Program>(optional: true);
builder.Configuration.AddJsonFile("appsettings.Contact.local.json", optional: true);
builder.WebHost.ConfigureKestrel(options => options.Limits.MaxRequestBodySize = 8 * 1024);

var allowedOrigins = new List<string> { "http://localhost:5173", "http://127.0.0.1:5173" };
var productionOrigin = builder.Configuration["CORS_ORIGIN"];
if (!string.IsNullOrWhiteSpace(productionOrigin)) allowedOrigins.Add(productionOrigin.TrimEnd('/'));
builder.Services.AddCors(options => options.AddPolicy("frontend", policy =>
    policy.WithOrigins(allowedOrigins.ToArray()).WithMethods("POST").WithHeaders("Content-Type")));
builder.Services.AddHttpClient("formspree", client =>
{
    client.Timeout = TimeSpan.FromSeconds(75);
    client.DefaultRequestHeaders.Accept.ParseAdd("application/json");
});
builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    // shortcut: one limit is shared across visitors, sufficient for a low-traffic portfolio; use a trusted per-IP key if traffic grows.
    options.AddPolicy("contact", _ => RateLimitPartition.GetFixedWindowLimiter("all", _ =>
        new FixedWindowRateLimiterOptions { PermitLimit = 5, Window = TimeSpan.FromMinutes(10), QueueLimit = 0 }));
});

var app = builder.Build();
var configuredFormId = app.Configuration["FORMSPREE_FORM_ID"];
app.Logger.LogInformation("Contact form configured: {Configured}; environment: {Environment}",
    !string.IsNullOrWhiteSpace(configuredFormId) && System.Text.RegularExpressions.Regex.IsMatch(configuredFormId, "^[a-zA-Z0-9]+$"), app.Environment.EnvironmentName);
app.UseCors("frontend");
app.UseRateLimiter();

app.MapPost("/api/contact", async (ContactRequest? request, IHttpClientFactory clients, IConfiguration config, CancellationToken ct) =>
{
    if (request is null) return Results.BadRequest(new { error = "Please complete the contact form." });
    var check = request.Check();
    if (check.Status == ContactStatus.Spam) return Results.NoContent();
    if (check.Status == ContactStatus.Invalid) return Results.BadRequest(new { error = "Check your name, email, and message." });

    var formId = config["FORMSPREE_FORM_ID"];
    if (string.IsNullOrWhiteSpace(formId) || !System.Text.RegularExpressions.Regex.IsMatch(formId, "^[a-zA-Z0-9]+$"))
        return Results.Json(new { error = "Contact form is temporarily unavailable." }, statusCode: 503);

    var sent = await FormspreeContactSender.SendAsync(clients.CreateClient("formspree"), formId, check.Submission!, ct);
    return sent
        ? Results.Ok(new { message = "Message sent." })
        : Results.Json(new { error = "Message could not be sent. Please email me directly." }, statusCode: 502);
}).RequireRateLimiting("contact");

app.Run();
