import { apiClientFactory } from "@vue-storefront/core"
import * as api from "./api"
import { apiClient } from "./helpers/apiClient"
import { defaultSettings } from "./helpers/defaultSettings"
import { Config } from "./types"

function onCreate(settings: Config) {
  const config = {
    ...defaultSettings,
    ...settings,
  } as unknown as Config

  if (settings.client) {
    return {
      client: settings.client,
      config,
    }
  }

  return {
    config: settings,
    client: apiClient({
      baseUrl: config.baseUrl,
      ...config.customOptions,
    }),
  }
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api,
  extensions: [],
})

export { createApiClient }
