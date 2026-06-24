# id-verify-stream

Real-time ID verification portfolio project demonstrating WebSocket communication, React, Node.js gateway, and Spring Boot validation.

## Architecture

```
┌─────────────────────┐
│ React + TypeScript  │
│ Webcam Stream       │
│ WebSocket Client    │
└──────────┬──────────┘
           │ WebSocket
           ▼
┌─────────────────────┐
│ Node.js Gateway     │
│ Socket.IO           │
│ Session Management  │
└──────────┬──────────┘
           │ REST
           ▼
┌─────────────────────┐
│ Spring Boot         │
│ Validation Engine   │
│ Business Rules      │
└─────────────────────┘
```

## Project Structure

| Folder | Purpose |
|--------|---------|
| `frontend-react/` | React + TypeScript + Vite + MUI webcam client |
| `websocket-gateway/` | Node.js + Socket.IO gateway layer |
| `validation-service/` | Spring Boot validation engine |
| `docs/` | Architecture and sequence diagrams |

## Validation Events

- `GLARE_DETECTED`
- `FACE_NOT_VISIBLE`
- `DOCUMENT_OUT_OF_FRAME`
- `DOCUMENT_CENTERED`
- `ID_VERIFIED`

## Status

Scaffolding phase — services will be implemented incrementally.
