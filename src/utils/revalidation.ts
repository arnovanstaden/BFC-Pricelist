'use server';

import { revalidatePath } from 'next/cache'

export const revalidatePriceList = () => {
  revalidatePath('/', 'layout');
}