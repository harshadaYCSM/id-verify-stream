# Sequence Diagram

## Frame Validation Flow

```mermaid
sequenceDiagram
    participant User
    participant React as React Frontend
    participant Gateway as Node.js Gateway
    participant Spring as Spring Boot Service

    User->>React: Opens app, starts webcam
    React->>Gateway: WebSocket connect (Socket.IO)
    Gateway-->>React: Connection established

    loop Every ~300ms
        React->>Gateway: Send frame (base64)
        Gateway->>Spring: POST /api/validate
        Spring-->>Gateway: Validation event(s)
        Gateway-->>React: Emit validation event
        React-->>User: Update UI (status, alerts)
    end

    Spring-->>Gateway: ID_VERIFIED
    Gateway-->>React: ID_VERIFIED
    React-->>User: Show success state
```

## Event Types

- `GLARE_DETECTED` — glare on document; user should adjust lighting
- `FACE_NOT_VISIBLE` — face not detected in frame
- `DOCUMENT_OUT_OF_FRAME` — ID document not fully visible
- `DOCUMENT_CENTERED` — document positioned correctly
- `ID_VERIFIED` — verification complete
