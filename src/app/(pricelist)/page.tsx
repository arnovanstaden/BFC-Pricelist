import { Box } from '@my-mui/material';
import Heading from './components/Heading/Heading';
import Product from './components/Product';
import Treatment from './components/Treatment';

const PriceListPage = (): JSX.Element | null => {
  return (
    <>
      <Heading>
        Treatments
      </Heading>
      <Treatment />

      <Box sx={{ paddingTop: '3rem' }} />
      <Heading>
        Products
      </Heading>
      <Product />
    </>
  );
};

export default PriceListPage;
