import { StoreCartsRes } from "@medusajs/medusa"
import { Context } from "@vue-storefront/core"

export const removeFromCart = async (
  context: Context,
  cartId: string,
  lineId: string
): Promise<StoreCartsRes> =>
  context.client.carts.lineItems.delete(cartId, lineId)
