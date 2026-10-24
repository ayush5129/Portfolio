using System.Net;
using Portfolio.Backend;

Check(new ContactRequest("A", "person@example.com", "This is a valid message", "").Check().Status == ContactStatus.Invalid, "short name");
Check(new ContactRequest("Ayush", "bad-email", "This is a valid message", "").Check().Status == ContactStatus.Invalid, "invalid email");
Check(new ContactRequest("Ayush", "person@example.com", "Too short", "").Check().Status == ContactStatus.Invalid, "short message");
Check(new ContactRequest("Ayush", "person@example.com", "This is a valid message", "spam").Check().Status == ContactStatus.Spam, "honeypot");

var valid = new ContactRequest("  Ayush  ", " person@example.com ", "  A detailed message for you.  ", "").Check();
Check(valid.Status == ContactStatus.Valid && valid.Submission?.Name == "Ayush" && valid.Submission.Email == "person@example.com", "trimmed valid submission");

foreach (var (status, expected) in new[] { (HttpStatusCode.OK, true), (HttpStatusCode.BadRequest, false) })
{
    var handler = new FakeHandler(_ => Task.FromResult(new HttpResponseMessage(status)));
    var sent = await FormspreeContactSender.SendAsync(new HttpClient(handler), "example123", valid.Submission!, CancellationToken.None);
    Check(sent == expected, $"provider {(int)status}");
    Check(handler.LastRequest?.RequestUri?.ToString() == "https://formspree.io/f/example123", "provider URL");
}

var failed = await FormspreeContactSender.SendAsync(
    new HttpClient(new FakeHandler(_ => throw new HttpRequestException("offline"))),
    "example123", valid.Submission!, CancellationToken.None);
Check(!failed, "provider network failure");

Console.WriteLine("Contact checks passed: validation, honeypot, trimming, delivery success and failure.");

static void Check(bool condition, string name)
{
    if (!condition) throw new Exception($"Failed: {name}");
}

sealed class FakeHandler(Func<HttpRequestMessage, Task<HttpResponseMessage>> send) : HttpMessageHandler
{
    public HttpRequestMessage? LastRequest { get; private set; }
    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        LastRequest = request;
        return send(request);
    }
}
