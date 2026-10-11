# Luber & Guber

Family ride requests with Google sign-in, private Supabase records, Louis, Gadi and Stella driver dashboards, ASAP and scheduled requests, current-location pickup, and optional web push alerts.

Open https://alljaye.github.io/luber-guber/ and sign in. Each driver signs in using their configured Google account, enables alerts on their device, and turns on accepting requests. A rider sees acceptance and subsequent status under Your rides; visible pages refresh every five seconds.

On iPhone, open in Safari and use Share → Add to Home Screen. Open the installed app and enable alerts. Each device must opt in separately. Notifications are best effort; always confirm acceptance in the app. This family app is not an emergency service.

GitHub Pages deploys main/root. Only a publishable API key is included in source. Database policies enforce access to rider and assigned-driver records. Server-side notification credentials stay in Supabase. BeyondTheOverlook is separate.

This replaces the original local-only Version 3 demo. The live backend must be configured separately; copying these static files alone does not create a working ride service.
