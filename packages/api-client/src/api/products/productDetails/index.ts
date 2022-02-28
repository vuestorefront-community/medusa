import { StoreProductsRes } from '@medusajs/medusa';
import { Context } from '@vue-storefront/core';

export const productDetails = async (
  context: Context,
  id: string
): Promise<StoreProductsRes> => context.client.products.retrieve(id);
