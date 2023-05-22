import { Box } from '@my-mui/material';
import Heading from './components/Heading/Heading';
import Product from './components/Product';
import Treatment from './components/Treatment';
import supabase from '@lib/supabase';

export const revalidate = 0;

const PriceListPage = async (): Promise<JSX.Element | null> => {
  const products = (await supabase.from('products').select('*')).data;
  const treatments = (await supabase.from('treatments').select('*')).data;

  return (
    <>
      {treatments && treatments?.length > 0 && (
        <>
          <Heading>
            Treatments
          </Heading>

          {treatments?.map((treatment) => <Treatment key={treatment.id}  {...treatment} />)}
        </>
      )}

      <Box sx={{ paddingTop: '3rem' }} />
      {
        products && products.length > 0 && (
          <>
            <Heading>
              Products
            </Heading>
            {products?.map((product) => <Product key={product.id}  {...product} />)}
          </>
        )
      }
    </>
  );
};

export default PriceListPage;
