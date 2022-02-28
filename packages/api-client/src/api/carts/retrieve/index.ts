import { StoreCartsRes } from '@medusajs/medusa';
import { Context } from '@vue-storefront/core';

export const getCart = async (
  context: Context,
  id: string
): Promise<StoreCartsRes> => context.client.carts.retrieve(id);
