// EduXL web config. Override any of these with a .env file (VITE_ prefix).

export const API_BASE =
  import.meta.env.VITE_EDUXL_API_BASE ??
  "https://prod-main-eduxl2-2-98ef18-00rrcm9q11h.compute.instacloud-edge.com/api/v1";

// The unlisted admin route. Not a secret on its own (it ships in the JS bundle) —
// the admin login + backend isAdmin check are what actually protect the data.
export const ADMIN_PATH = import.meta.env.VITE_ADMIN_PATH ?? "/ops-console-7q4m";

// Leave empty to hide that store button on the landing page.
export const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL ?? "";
export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL ?? "";
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? "";

const TOKEN_KEY = "eduxl_admin_token";

export const adminToken = {
  get: () => {
    try { return sessionStorage.getItem(TOKEN_KEY); } catch { return null; }
  },
  set: (t) => {
    try { sessionStorage.setItem(TOKEN_KEY, t); } catch { /* private mode */ }
  },
  clear: () => {
    try { sessionStorage.removeItem(TOKEN_KEY); } catch { /* private mode */ }
  },
};
