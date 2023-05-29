'use client';

import { useRouter } from 'next/navigation';
import { Button, Grid } from '@my-mui/material';

const Buttons = ({ addNew }: { addNew: boolean }): JSX.Element | null => {
  const nextRouter = useRouter();

  return (
    <Grid container item xs={12} justifyContent="right" spacing={4}>
      <Grid item xs={6} md={3}>
        <Button variant="outlined" fullWidth onClick={() => addNew ? nextRouter.back() : nextRouter.push('/dashboard/treatments')}>
          Cancel
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button variant="contained" fullWidth>
          Save
        </Button>
      </Grid>
    </Grid>
  )
};

export default Buttons;
