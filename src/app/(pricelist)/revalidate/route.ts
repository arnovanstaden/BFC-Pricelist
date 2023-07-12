import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  revalidatePath('/');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

// For Uptime to prevent supabase shutting down
export async function HEAD() {
  revalidatePath('/');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}