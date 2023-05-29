import ManageProduct from '../components/ManageProduct';
import { Divider, Typography } from '@my-mui/material';

const Component = (): JSX.Element | null => (
  <>
    <Typography variant="h2">New Product</Typography>
    <Divider sx={{ margin: '1rem 0 2rem' }} light />
    <ManageProduct addNew />
  </>
)

export default Component;
