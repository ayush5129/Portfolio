# Portfolio contact API

ASP.NET Core API for `POST /api/contact`. It validates name, email, and message, ignores honeypot submissions, limits requests to five per ten minutes, and relays valid messages to Formspree over HTTPS.

## Local setup

Create a Formspree form and copy its form ID (the part after `/f/` in its endpoint URL). No API key is needed to submit messages. Put the ID in `appsettings.Contact.local.json`, which is ignored by Git:

```json
{ "FORMSPREE_FORM_ID": "YOUR_FORM_ID" }
```

Then run:

```powershell
dotnet run --launch-profile http
```

If Visual Studio is already running the API, restart it after setting the ID. The frontend runs at `http://localhost:5173` and calls the API at `http://localhost:5032` by default. Without a Formspree ID, valid submissions return 503; invalid and honeypot submissions can still be checked locally. The direct email link remains available.

## Deploy on Render

Push the `Backend/Dockerfile` and `.dockerignore` to the production branch. In Render, create a **Web Service** from the GitHub repository with **Language: Docker**, **Branch: main**, **Root Directory: Backend**, and **Dockerfile Path: ./Dockerfile**. Render builds the image; Docker is not required on your computer.

Set these environment variables on the Render service:

- `FORMSPREE_FORM_ID`: the ID from your Formspree endpoint, not the full URL.
- `CORS_ORIGIN`: the exact public Vercel origin, such as `https://example.vercel.app`, without a trailing slash.

The API listens on `0.0.0.0:10000` for Render. In Vercel, set `VITE_API_BASE_URL` to the Render service URL without a trailing slash and redeploy the frontend. Test a real contact submission from the live site and confirm its arrival in Formspree. The local contact settings file and `.env` files must stay out of Git and the Docker build context.

## Checks

```powershell
dotnet build Backend.csproj -c Release
dotnet run --project Tests/Backend.Tests.csproj -c Release
```

The second command checks validation and Formspree relay success/failure with a fake HTTP handler. `Backend.http` contains a sample local request.
