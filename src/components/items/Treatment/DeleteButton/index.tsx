'use client';

import { Delete } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';

const DeleteButton = ({ id }: { id: number }): JSX.Element | null => {
  const deleteItem = () => {
    console.log(id);
  }

  return (
    <IconButton onClick={deleteItem}>
      <Delete />
    </IconButton>
  );
};

export default DeleteButton;
