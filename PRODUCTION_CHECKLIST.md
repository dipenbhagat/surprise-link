# Before SurpriseLink goes live

The current project is a polished, responsive front-end prototype. A successful production build means its files can be generated; it does not mean the account, payment, or publishing services are production-ready.

## Required service work

- [ ] Add a backend API and database for accounts, gift drafts, purchases, and published gifts.
- [ ] Configure Google OAuth with the production domain, authorized origins, and callback URLs. Keep secrets on the server; never put a client secret in browser code.
- [ ] Keep checkout disabled while the launch offer is $0. If paid plans are introduced later, connect a payment provider through server-created checkout sessions and verified payment webhooks.
- [ ] Store uploaded photos in private cloud storage and publish only files the gift owner intends to share.
- [ ] Add a working email provider for newsletter signup, receipts, and account messages.
- [ ] Replace the local seven-day timer and local purchase flags with server-side draft expiration and purchase entitlements.

## Required launch checks

- [ ] Publish privacy, terms, refund, and cookie information that matches the services actually used.
- [ ] Add a real support contact and verify all legal and support links.
- [ ] Configure HTTPS, production environment variables, logging, backups, and error monitoring.
- [ ] Set `VITE_PUBLIC_SITE_URL` to the public HTTPS origin so generated links and QR codes do not point to localhost.
- [ ] Configure the host to serve `index.html` for app routes such as `/templates/digital-letter` and `/edit/digital-letter`.
- [ ] Test real Google sign-in, share links and QR scans on another device, photo upload limits, share permissions, and draft expiry in a staging environment.
- [ ] Confirm keyboard navigation, screen-reader labels, reduced-motion behavior, and supported browser/device coverage.

Until these items are complete, keep sign-in described as a preview and do not collect real payment details or promise cloud storage. The diary PIN is a presentation lock; shared link contents remain client-side encoded.
