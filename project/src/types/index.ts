// Define all shared types and interfaces

export interface Destination {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Audio API related types
export interface AudioGenerationParams {
  destinationId: string;
  language?: string;
  voice?: string;
}

export interface AudioResponse {
  url: string;
  duration: number;
  error?: string;
}