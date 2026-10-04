# SurpriseLink manual QA report

Date: 2026-10-04

## Checked in the browser

- All 22 template cards opened their detail page and free editor. Each displayed a themed live preview and editable content fields.
- Category filters returned matching templates; search returned matching designs and a friendly empty state when there were no matches.
- Standard editors render at 320, 390, 768, 1024, and 1440 px with no horizontal document overflow.
- The specialized Digital Letter and Kawaii Digital Letter flows advanced through all five scenes and moved back one scene.
- The Digital Diary accepted its four-digit PIN, advanced through all six pages, moved back one page, and exposed editable fields under all six page tabs.
- All 19 standard gift pages revealed their personalized message and signature when opened. Both letter stories advanced through their five recipient scenes. The shared diary accepted its PIN, advanced through all six pages, and Restart returned to the cover and cleared the PIN entry.
- The diary memory photos now stay within their page rows.
- QR generation produced a PNG image from a test link; the deployed QR must still be scanned on a second device after Vercel setup.
- No browser console errors or warnings were reported in the final smoke check.
- `npm run build` succeeds.

## Fixes made during QA

- Enabled the Continue button on the first scene of Digital Letter and Kawaii Digital Letter. The diary still requires its PIN before leaving the cover.
- Corrected detail-page descriptions to distinguish the three multi-page templates from the 19 one-page gift experiences, and to clarify that local photos are not included in shared links.
- Removed Cart buttons during the free launch offer and replaced them with free-creation labels. Checkout remains disabled.
- Added a Vercel SPA rewrite so direct routes such as `/templates/digital-letter` and `/edit/digital-letter` serve the app.

## Production blockers

This is still a front-end prototype; a successful build is not production service readiness.

- Shared links contain editable text and the diary PIN in the URL. The PIN is a presentation lock, not security. Do not use it to protect private information.
- Photos and custom backgrounds are local previews only. Add cloud media storage and server-side publication before promising shared photo gifts.
- Google sign-in UI is not backed by a server that verifies Google tokens or creates secure sessions.
- User accounts, cross-device drafts, server-side expiry, and email are not implemented.
- Paid checkout is intentionally hidden while all templates are free. Do not accept payments until a payment provider and server-side verification are added.
- Add and test privacy/terms/support details, HTTPS, monitoring, backups, and staging share/QR scans on a second device.
- A local Git repository is initialized on `main` and project files are staged. `.env.local` is ignored. No GitHub remote or initial commit exists yet; choose the repository destination before pushing. Keep secrets out of Git.

## Recommended Vercel settings

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Set `VITE_PUBLIC_SITE_URL` to the deployed HTTPS origin for stable gift links and QR codes.
- Add the deployed domain to Google OAuth authorized JavaScript origins after the production OAuth server flow exists.




