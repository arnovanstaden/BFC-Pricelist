'use client';

import { Grid, TextField, Button } from '@my-mui/material';
import { Treatment } from '@lib/supabase/types';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@lib/supabase';
import { notify } from '@lib/notification';

const ManageTreatment = ({ dbTreatment, addNew }: { dbTreatment?: Treatment, addNew: boolean }): JSX.Element => {
  const nextRouter = useRouter();

  const [treatment, setTreatment] = useState<Treatment | undefined>(dbTreatment);

  const updateTreatmentState = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setTreatment((prev) => ({ ...prev, [field]: value }))
  };

  const updateTreatment = async () => {
    if (!treatment) return;
    const response = await supabase.from('treatments').update(treatment).eq('id', dbTreatment?.id!)
    console.log(response);
    notify('Treatment Updated');
    nextRouter.push('/dashboard/treatments');
  };

  const insertTreatment = async () => {
    if (!treatment) return;
    const response = await supabase.from('treatments').insert(treatment)
    console.log(response);
    notify('Treatment Added');
    nextRouter.push('/dashboard/treatments');
  }

  return (
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
          value={treatment?.name}
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
          value={treatment?.brand}
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
          value={treatment?.price}
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
          value={treatment?.usage}
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
          value={treatment?.range}
          onChange={updateTreatmentState}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          id="outlined-basic"
          label="unit"
          variant="outlined"
          type="text"
          name="Unit"
          fullWidth
          value={treatment?.unit}
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
          value={treatment?.description}
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
          <Button variant="contained" fullWidth onClick={addNew ? insertTreatment : updateTreatment}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ManageTreatment;
