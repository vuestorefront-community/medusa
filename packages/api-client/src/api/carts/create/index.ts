import { StoreCartsRes, StorePostCartReq } from "@medusajs/medusa"
import { Context } from "@vue-storefront/core"

export const createCart = async (
  context: Context,
  payload: StorePostCartReq
): Promise<StoreCartsRes> => context.client.carts.create(payload)
