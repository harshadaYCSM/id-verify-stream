# Architecture

## Overview

This system verifies ID documents in real time using a webcam stream. The frontend sends video frames over WebSockets; a Node.js gateway manages sessions and routes traffic; a Spring Boot service applies validation rules and returns events.

## Components

### Frontend (`frontend-react/`)

- Captures webcam frames every few hundred milliseconds
- Sends frames to the gateway via Socket.IO
- Updates UI instantly when validation events arrive

### Gateway (`websocket-gateway/`)

- Handles WebSocket upgrades and persistent connections
- Maintains per-user sessions
- Forwards frames to the validation service via REST
- Routes validation events back to the correct client

### Validation Service (`validation-service/`)

- Receives frames from the gateway
- Applies validation rules (mock events for MVP)
- Returns structured validation events

## MVP Mock Flow

For the initial version, validation is simulated by frame count:

| Frame | Event |
|-------|-------|
| 10 | `GLARE_DETECTED` |
| 20 | `DOCUMENT_CENTERED` |
| 30 | `ID_VERIFIED` |

## Why WebSockets?

HTTP polling would add latency and unnecessary load when pushing frequent validation updates. WebSockets provide a persistent, bidirectional channel suited for real-time frame streaming and event delivery.
