using System.Net.Http.Json;

namespace Portfolio.Backend;

public static class FormspreeContactSender
{
    public static async Task<bool> SendAsync(HttpClient client, string formId, ContactSubmission submission, CancellationToken ct)
    {
        try
        {
            using var response = await client.PostAsJsonAsync($"https://formspree.io/f/{formId}", submission, ct);
            return response.IsSuccessStatusCode;
        }
        catch (HttpRequestException) { return false; }
        catch (TaskCanceledException) when (!ct.IsCancellationRequested) { return false; }
    }
}
