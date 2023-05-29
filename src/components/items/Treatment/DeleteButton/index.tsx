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
    await supabase.from('treatments').delete().eq('id', id).then((res) => console.error(res));
    await revalidatePriceList();
    await nextRouter.refresh();
    notify('Treatment Deleted');
  }

  return (
    <IconButton onClick={deleteItem}>
      <Delete />
    </IconButton>
  );
};

export default DeleteButton;
