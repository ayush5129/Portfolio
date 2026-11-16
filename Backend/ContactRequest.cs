using System.Net.Mail;

namespace Portfolio.Backend;

public sealed record ContactRequest(string? Name, string? Email, string? Message, string? Website)
{
    public ContactCheck Check()
    {
        if (!string.IsNullOrWhiteSpace(Website)) return new(ContactStatus.Spam, null);

        var name = Name?.Trim() ?? "";
        var email = Email?.Trim() ?? "";
        var message = Message?.Trim() ?? "";

        if (name.Length is < 2 or > 100 ||
            email.Length is < 3 or > 254 ||
            !MailAddress.TryCreate(email, out var address) || address.Address != email ||
            message.Length is < 10 or > 2000)
            return new(ContactStatus.Invalid, null);

        return new(ContactStatus.Valid, new ContactSubmission(name, email, message));
    }
}

public enum ContactStatus { Valid, Invalid, Spam }
public sealed record ContactSubmission(string Name, string Email, string Message);
public sealed record ContactCheck(ContactStatus Status, ContactSubmission? Submission);
