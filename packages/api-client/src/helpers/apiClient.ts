import Medusa from "@medusajs/medusa-js"
import { Settings } from "../types"

export const apiClient = (settings: Settings): Medusa =>
  new Medusa({
    baseUrl: settings.baseUrl,
    maxRetries: settings.maxRetries,
  })
