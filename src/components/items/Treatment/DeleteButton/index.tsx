'use client';

import { notify } from '@lib/notification';
import supabase from '@lib/supabase';
import { Delete } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ id }: { id: number }): JSX.Element | null => {
  const nextRouter = useRouter();
  const deleteItem = async () => {
    console.log(id)
    await supabase.from('treatments').delete().eq('id', id).then((res) => console.log(res));
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
