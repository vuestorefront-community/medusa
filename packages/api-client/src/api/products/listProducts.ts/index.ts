import { StoreGetProductsParams, StoreProductsListRes } from '@medusajs/medusa';
import { Context } from '@vue-storefront/core';

export const listProducts = async (
  context: Context,
  query?: StoreGetProductsParams
): Promise<StoreProductsListRes> => {
  try {
    return await context.client.products.list(query);
  } catch (error) {
    throw new Error(error);
  }
};
