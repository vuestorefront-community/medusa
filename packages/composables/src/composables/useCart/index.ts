import { StorePostCartsCartLineItemsReq } from "@medusajs/medusa"
import {
  Context,
  useCartFactory,
  UseCartFactoryParams,
} from "@vue-storefront/core"
import type { Cart, CartItem, Product } from "@vue-storefront/medusa-api"

const params: UseCartFactoryParams<Cart, CartItem, Product> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    return await context.$medusa.api.createCart({})
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (
    context: Context,
    { currentCart, product: variant, quantity, customQuery }
  ) => {
    const payload: StorePostCartsCartLineItemsReq = {
      variant_id: variant.id,
      quantity,
    }

    return await context.$medusa.api.addToCart(currentCart.id, payload)
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (
    context: Context,
    { currentCart, product, customQuery }
  ) => {
    // product is in fact LineItem
    return await context.$medusa.api.removeFromCart(currentCart.id, product.id)
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (
    context: Context,
    { currentCart, product, quantity, customQuery }
  ) => {
    // product is in fact LineItem
    return await context.$medusa.api.updateLineQuantity(currentCart.id, {
      lineId: product.id,
      quantity,
    })
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    console.log("Mocked: useCart.clear")
    return {} as any
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    // product is in fact LineItem
    const updatedCart = await context.$medusa.api.addCouponCode(
      currentCart.id,
      couponCode
    )

    return {
      updatedCart,
      updatedCoupon: couponCode,
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    const updatedCart = await context.$medusa.api.removeCouponCode(
      currentCart.id,
      couponCode
    )

    return {
      updatedCart,
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    return Boolean(currentCart.items.find((item) => item.id === product.id))
  },
}

export const useCart = useCartFactory<Cart, CartItem, Product>(params)
