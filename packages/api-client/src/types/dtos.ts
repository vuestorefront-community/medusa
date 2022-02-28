import {
  Cart as MedusaCart,
  LineItem as MedusaLineItem,
  Product as MedusaProduct,
  StoreGetProductsParams as MedusaStoreGetProductsParams,
} from "@medusajs/medusa"

export type TODO = Record<string, any>

export type BillingAddress = TODO

export type Category = TODO

export type CartItem = MedusaLineItem

export type Cart = MedusaCart

export type Coupon = TODO

export type Facet = TODO

export type FacetSearchCriteria = TODO

export type Order = TODO

export type OrderItem = TODO

export type PasswordResetResult = TODO

export type ProductFilter = TODO

export type Review = TODO

export type ReviewItem = TODO

export type Product = MedusaProduct

export type User = TODO

export type UserBillingAddress = TODO

export type UserBillingAddressItem = TODO

export type UserBillingAddressSearchCriteria = TODO

export type UserShippingAddress = TODO

export type UserShippingAddressItem = TODO

export type UserShippingAddressSearchCriteria = TODO

export type ShippingAddress = TODO

export type ShippingMethod = TODO

export type ShippingProvider = TODO

export type Store = TODO

export type Wishlist = TODO

export type WishlistItem = TODO

export type ListProductSearchQuery = MedusaStoreGetProductsParams
