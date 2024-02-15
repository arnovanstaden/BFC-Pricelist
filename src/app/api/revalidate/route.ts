import { getProducts } from '@lib/products';
import { revalidatePriceList } from '@lib/revalidation';
import { NextResponse } from 'next/server';

export async function HEAD() {
  await revalidatePriceList();
  await getProducts();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}