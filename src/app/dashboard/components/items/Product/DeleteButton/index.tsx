'use client';

import { notify } from '@lib/notification';
import { revalidatePriceList } from '@lib/revalidation';
import supabase from '@lib/supabase';
import { Delete } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ id }: { id: number }): JSX.Element | null => {
  const nextRouter = useRouter();

  const deleteItem = async () => {
    const response = await supabase.from('products').delete().eq('id', id);
    console.log(response)
    await revalidatePriceList();
    await nextRouter.refresh();
    notify('Product Deleted');
  }

  return (
    <IconButton onClick={deleteItem}>
      <Delete />
    </IconButton>
  );
};

export default DeleteButton;
