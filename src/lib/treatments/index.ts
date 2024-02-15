import { revalidatePriceList } from 'src/utils/revalidation';
import supabase from '@lib/supabase';
import { ITreatment } from '@types';

interface GetTreatmentProps {
  column?: keyof ITreatment;
}

export const getTreatments = async (orderOptions: GetTreatmentProps): Promise<ITreatment[]> => {
  const query = supabase.from('treatments').select('*');

  if (orderOptions.column) {
    query.order(orderOptions.column, { ascending: true });
  }

  const treatments = await query;
  if (!treatments.data) return [];
  return treatments.data as ITreatment[];
}

export const getTreatment = async (id: string): Promise<ITreatment | undefined> => {
  const treatments = await supabase.from('treatments').select().eq('id', id);
  if (!treatments.data) return undefined;
  return treatments.data[0] as ITreatment;
}

export const updateTreatment = async (updatedTreatment: ITreatment): Promise<void> => {
  await supabase.from('treatments').upsert(updatedTreatment).eq('id', updatedTreatment.id);
  revalidatePriceList();
}

export const deleteTreatment = async (id: string): Promise<void> => {
  await supabase.from('treatments').delete().eq('id', id);
  revalidatePriceList();
}