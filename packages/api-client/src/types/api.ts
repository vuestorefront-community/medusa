import {
  StoreCartsRes,
  StoreGetProductsParams,
  StoreProductsRes
} from '@medusajs/medusa';

export type Endpoints = {
  createCart(StorePostCartsCartReq): Promise<StoreCartsRes>
  listProducts(query?: StoreGetProductsParams): Promise<StoreProductsRes[]>
  productDetails(id: string): Promise<StoreProductsRes>
}
