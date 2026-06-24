export type ValidationEventType =
  | 'GLARE_DETECTED'
  | 'FACE_NOT_VISIBLE'
  | 'DOCUMENT_OUT_OF_FRAME'
  | 'DOCUMENT_CENTERED'
  | 'ID_VERIFIED';

export interface ValidationEvent {
  type: ValidationEventType;
  message: string;
  timestamp: number;
}

export type ConnectionStatus =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'error';

export type VerificationStatus =
  | 'idle'
  | 'scanning'
  | 'issues'
  | 'centered'
  | 'verified';
