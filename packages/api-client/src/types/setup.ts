import Medusa from '@medusajs/medusa-js';
import { Endpoints } from '../types/api';

export interface ClientConfig {
  baseUrl: string
}

export type Settings = {
  // e.g. http://localhost:8000
  baseUrl: string
  maxRetries: number
}

export interface Config extends ClientConfig {
  client?: Medusa
  customOptions: {
    maxRetries: number
  }
  overrides: Endpoints
}
