# Portfolio contact API

ASP.NET Core API for `POST /api/contact`. It validates name, email, and message, ignores honeypot submissions, limits requests to five per ten minutes, and relays valid messages to Formspree over HTTPS.

## Local setup

Create a Formspree form and set its form ID in the environment. The ID is the part after `/f/` in the form URL. No API key or email credential is stored in this repository.

```powershell
$env:FORMSPREE_FORM_ID = 'yourFormId'
dotnet run --launch-profile http
```

The frontend runs at `http://localhost:5173`. Without a Formspree ID, valid submissions return 503; invalid and honeypot submissions can still be checked locally. The direct email link remains available.

For production, set `FORMSPREE_FORM_ID` and `CORS_ORIGIN` (the exact Vercel site origin, such as `https://example.vercel.app`) on Render. The Render Dockerfile and deployment steps belong to the final module.

## Checks

```powershell
dotnet build Backend.csproj -c Release
dotnet run --project Tests/Backend.Tests.csproj -c Release
```

The second command checks validation and Formspree relay success/failure with a fake HTTP handler. `Backend.http` contains a sample local request.
