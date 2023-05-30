import ManageTreatment from '../components/ManageTreatment';
import { Divider, Typography } from '@my-mui/material';

const Component = (): JSX.Element | null => (
  <>
    <Typography variant="h2">New Treatment</Typography>
    <Divider sx={{ margin: '1rem 0 2rem' }} light />
    <ManageTreatment addNew />
  </>
)

export default Component;
