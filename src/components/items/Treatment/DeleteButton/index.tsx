'use client';

import supabase from '@lib/supabase';
import { Delete } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';

const DeleteButton = ({ id }: { id: number }): JSX.Element | null => {
  const deleteItem = () => supabase.from('treatments').delete().eq('id', id).then((res) => console.log(res));

  return (
    <IconButton onClick={deleteItem}>
      <Delete />
    </IconButton>
  );
};

export default DeleteButton;
