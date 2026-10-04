// Public Google OAuth web client ID. Never put a client secret in Vite env variables.
export const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
export const hasGoogleClientId = Boolean(googleClientId);
