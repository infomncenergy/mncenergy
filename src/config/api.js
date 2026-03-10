// ─── API Base URL ─────────────────────────────────────────────────────────────
// In development: points to local backend (port 5000)
// In production:  uses the same origin (Vite proxies /api → backend)
//
// You can override this by setting VITE_API_URL in your .env file:
//   VITE_API_URL=https://yourbackend.com

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
