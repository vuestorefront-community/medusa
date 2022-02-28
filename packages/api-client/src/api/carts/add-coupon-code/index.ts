import { StoreCartsRes } from "@medusajs/medusa"
import { Context } from "@vue-storefront/core"

export const addCouponCode = async (
  context: Context,
  cartId: string,
  couponCode: string
): Promise<StoreCartsRes> =>
  context.client.carts.update(cartId, { discounts: [couponCode] })
