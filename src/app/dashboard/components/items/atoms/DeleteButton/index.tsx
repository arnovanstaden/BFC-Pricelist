'use client';

import { notify } from '@lib/notification';
import { revalidatePriceList } from '@lib/revalidation';
import supabase from '@lib/supabase';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { Delete } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.scss';

interface DeleteButtonProps {
  id: number;
  type: 'product' | 'treatment';
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const nextRouter = useRouter();

  const deleteItem = async () => {
    setOpenModal(false)
    const response = await supabase.from(props.type === 'product' ? 'products' : 'treatments').delete().eq('id', props.id);
    await revalidatePriceList();
    await nextRouter.refresh();
    notify(props.type === 'product' ? 'Product Deleted' : 'Treatment Deleted');
  }

  return (
    <>
      <IconButton onClick={() => setOpenModal(true)}>
        <Delete />
      </IconButton>
      <Modal
        open={openModal}
      >
        <Box className={styles.Modal}>
          <Typography variant="h6" component="h2">
            {props.type === 'product' ? 'Delete Product?' : 'Delete Treatment?'}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Are you sure you want to delete this item?
          </Typography>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={deleteItem}>
              Delete
            </Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteButton;
