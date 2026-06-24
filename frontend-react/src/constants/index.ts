export const APP_NAME = 'ID Verify Stream';

export const GATEWAY_URL =
  import.meta.env.VITE_GATEWAY_URL ?? 'http://localhost:3001';

/** Target interval for sending frames to the gateway (ms). Used in later phases. */
export const FRAME_INTERVAL_MS = 300;
