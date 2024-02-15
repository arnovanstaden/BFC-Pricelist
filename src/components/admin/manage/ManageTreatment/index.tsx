'use client';

import { Grid, TextField, Button, Box } from '@mui/material';
import { ITreatment } from '@types';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { notify } from '@utils/notifications';
import { updateTreatment } from '@lib/treatments';

const ManageTreatment = ({ treatment, addNew }: { treatment?: ITreatment, addNew: boolean }): JSX.Element => {
  const nextRouter = useRouter();
  const [updatedTreatment, setUpdatedTreatment] = useState(treatment);

  const validate = (): boolean => {
    if (!updatedTreatment?.name) {
      notify('Name is Required', 'error');
      return false;
    }
    if (!updatedTreatment?.price) {
      notify('Price is Required', 'error');
      return false;
    }
    return true;
  }

  const updateTreatmentState = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setUpdatedTreatment((prev) => ({
      ...prev,
      [field as keyof ITreatment]: value,
    }) as ITreatment);
  };

  const upsertTreatment = async () => {
    if (!updatedTreatment) return;
    const formIsValid = validate();
    if (!formIsValid) return;

    await updateTreatment(updatedTreatment);

    notify(addNew ? 'New Treatment Added' : 'Treatment Updated');
    await nextRouter.push('/dashboard/treatments');
    nextRouter.refresh();
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            required
            fullWidth
            value={updatedTreatment?.name}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            name="price"
            required
            fullWidth
            value={updatedTreatment?.price}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Brand"
            variant="outlined"
            type="text"
            name="brand"
            fullWidth
            value={updatedTreatment?.brand}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Usage"
            variant="outlined"
            type="text"
            name="usage"
            fullWidth
            value={updatedTreatment?.usage}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Range"
            variant="outlined"
            type="text"
            name="range"
            fullWidth
            value={updatedTreatment?.range}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="unit"
            variant="outlined"
            type="text"
            name="unit"
            fullWidth
            value={updatedTreatment?.unit}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            type="text"
            name="description"
            fullWidth
            multiline
            minRows={3}
            value={updatedTreatment?.description}
            onChange={updateTreatmentState}
          />
        </Grid>
        <Grid container item xs={12} justifyContent="right" spacing={4}>
          <Grid item xs={6} md={3}>
            <Button variant="outlined" fullWidth onClick={() => addNew ? nextRouter.back() : nextRouter.push('/dashboard/treatments')}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button variant="contained" fullWidth onClick={upsertTreatment}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ManageTreatment;
