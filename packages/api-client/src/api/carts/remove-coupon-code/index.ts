import { StoreCartsRes } from "@medusajs/medusa"
import { Context } from "@vue-storefront/core"

export const removeCouponCode = async (
  context: Context,
  cartId: string,
  couponCode: string
): Promise<StoreCartsRes> =>
  context.client.carts.deleteDiscount(cartId, couponCode)
