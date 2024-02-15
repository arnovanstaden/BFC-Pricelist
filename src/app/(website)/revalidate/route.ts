import { getProducts } from '@lib/supabase';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  revalidatePath('/');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

// For Uptime to prevent supabase shutting down
// Revalidation does not trigger DB call - only after another visit
export async function HEAD() {
  await getProducts();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}