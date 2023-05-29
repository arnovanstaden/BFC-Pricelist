import { Grid, TextField } from '@my-mui/material';
import Buttons from './Buttons';
import { Treatment } from '@lib/supabase/types';

const ManageTreatment = ({ treatment }: { treatment?: Treatment }): JSX.Element => (
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
      />
    </Grid>
    <Buttons addNew={!!treatment} />
  </Grid>
);

export default ManageTreatment;
