# Shyara Digital

Beautiful digital invitation cards and videos for weddings, celebrations, and moments that matter.

## Repository layout (monorepo)

```
├── frontend/                    # React marketing site + invitation portal demo
│   └── src/
│       ├── app/                 # Router, providers
│       ├── features/
│       │   ├── marketing/       # Public pages (home, samples, contact, …)
│       │   └── invitation-portal/  # Guest wedding-site demo (/invitation-website/demo)
│       └── components/
│           ├── layout/          # Navbar, footer, WhatsApp CTA
│           ├── marketing/       # SEO, carousel, shared marketing UI
│           └── ui/              # shadcn components in use
├── backend/                     # Express static host (optional local use; not used by Render Static Site today)
│   └── server.js
└── package.json                 # npm workspaces root
```

**Product zones**

| Zone | Location | Purpose |
|------|----------|---------|
| Marketing | `frontend/src/features/marketing` | SEO site, samples, WhatsApp lead gen |
| Invitation portal | `frontend/src/features/invitation-portal` | Guest-facing wedding demo (RSVP, events) |
| Backend | `backend/` | Future API (payments, editor, render). Today: optional static file server only |

Studio (self-serve PDF/video editor) and payment APIs are **not implemented yet** — add under `frontend/src/features/` and `backend/` when architecture is decided.

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install and run

From the repository root:

```bash
npm install
npm run dev
```

Open **http://localhost:8080**

### Scripts (root)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (`frontend`) |
| `npm run build` | Production build → `frontend/dist` |
| `npm run lint` | ESLint (`frontend`) |
| `npm run start:backend` | Serve `frontend/dist` via Express (local parity only) |

### Windows

```powershell
.\run-local.ps1
```

## Deployment (Render Static Site)

Production is a **Render Static Site** (`Shyara-Digital`), not the Express server.

After this monorepo layout is on `main`, set in the Render dashboard:

| Setting | Value |
|---------|--------|
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

Optional build filters: include `frontend/**`, ignore `backend/**`.

Custom domain: **https://digital.shyara.co.in**

## Technologies

- Vite, React 18, TypeScript
- React Router, Framer Motion
- Tailwind CSS, shadcn/ui
- react-helmet-async (SEO)

## License

Copyright © Shyara Digital. All rights reserved.
