import { StoreCartsRes } from "@medusajs/medusa"
import { Context } from "@vue-storefront/core"

export const updateLineQuantity = async (
  context: Context,
  cartId: string,
  { lineId, quantity }: { lineId: string; quantity: number }
): Promise<StoreCartsRes> =>
  context.client.carts.lineItems.update(cartId, lineId, { quantity })
