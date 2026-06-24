# Frontend (React + TypeScript)

React + Vite + Material UI client for real-time ID verification.

## Tech stack

- React 18 + TypeScript
- Vite 4
- Material UI 5

## Getting started

```bash
cd frontend-react
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment variables

Copy `.env.example` to `.env` and adjust as needed:

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_GATEWAY_URL` | `http://localhost:3001` | Socket.IO gateway URL |

## Project structure

```text
src/
├── components/     # UI components
├── constants/      # App-wide constants
├── hooks/          # Custom React hooks (webcam, etc.)
├── services/       # Socket.IO client, API helpers
├── theme/          # MUI theme
└── types/          # Shared TypeScript types
```

## Build phases

| Phase | Status |
|-------|--------|
| 1 — Bootstrap | Done |
| 2 — Static UI shell | Pending |
| 3 — Webcam capture | Pending |
| 4 — Socket.IO client | Pending |
| 5 — Frame streaming | Pending |
| 6 — Validation UX | Pending |
| 7 — Polish | Pending |

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
