import {
  StoreCartsRes as MedusaCart,
  Product as MedusaProduct,
  LineItem as MedusaLineItem,
  StoreGetProductsParams as MedusaStoreGetProductsParams
} from '@medusajs/medusa';
import Medusa from '@medusajs/medusa-js';
import { Endpoints } from './apiTypes';

export interface Storage {
  set: (
    name: string,
    value: any
  ) => void;
  get: (name: string) => any;
  remove: (name: string) => any;
  removeAll: () => void;
}

export type ConfigState = {
  getCartId(): string;
  setCartId(id?: string | null): void;
  getCustomerToken(): string;
  setCustomerToken(token?: string | null): void;
  getStore(): string;
  setStore(id?: string | null): void;
  getCurrency(): string;
  setCurrency(id?: string | null): void;
};

export interface ClientConfig {
  api: string;
  cookies: {
    currencyCookieName: string;
    countryCookieName: string;
    localeCookieName: string;
    cartCookieName: string;
    customerCookieName: string;
    storeCookieName: string;
  },
  state: ConfigState;
}

export type Settings = {
  api: string;
  maxRetries: number;
};

export interface Config extends ClientConfig {
  client?: Medusa;
  storage: Storage;
  customOptions: {
    maxRetries: number;
  };
  overrides: Endpoints;
}

export type TODO = Record<string, any>;

export type BillingAddress = TODO;

export type Category = TODO;

export type CartItem = MedusaLineItem;

export type Cart = MedusaCart;

export type Coupon = TODO;

export type Facet = TODO;

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type PasswordResetResult = TODO;

export type ProductFilter = TODO;

export type Review = TODO;

export type ReviewItem = TODO;

export type Product = MedusaProduct;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Store = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;

export type ListProductSearchQuery = MedusaStoreGetProductsParams;
