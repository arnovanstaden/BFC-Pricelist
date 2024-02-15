import { revalidatePriceList } from 'src/utils/revalidation';
import supabase from '@lib/supabase';
import { IProduct } from '@types';

interface GetProductsProps {
  column?: keyof IProduct;
}

export const getProducts = async (orderOptions?: GetProductsProps): Promise<IProduct[]> => {
  const query = supabase.from('products').select('*');

  if (orderOptions?.column) {
    query.order(orderOptions.column, { ascending: true });
  }

  const products = await query;
  if (!products.data) return [];
  return products.data as IProduct[];
}

export const getProduct = async (id: string): Promise<IProduct | undefined> => {
  const products = await supabase.from('products').select().eq('id', id);
  if (!products.data) return undefined;
  return products.data[0] as IProduct;
}

export const updateProduct = async (updatedProduct: IProduct): Promise<void> => {
  await supabase.from('products').upsert(updatedProduct).eq('id', updatedProduct.id);
  revalidatePriceList();
}

export const deleteProduct = async (id: string): Promise<void> => {
  await supabase.from('products').delete().eq('id', id);
  revalidatePriceList();
}