import { getProducts } from '@lib/products';
import { revalidatePriceList } from '@utils/revalidation';
import { NextResponse } from 'next/server';

export async function HEAD() {
  await revalidatePriceList();
  await getProducts();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function GET() {
  await revalidatePriceList();
  await getProducts();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}