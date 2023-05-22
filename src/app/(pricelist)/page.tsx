import { Box } from '@my-mui/material';
import Heading from './components/Heading/Heading';
import Product from './components/Product';
import Treatment from './components/Treatment';
import supabase from '@lib/supabase';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : undefined;

const PriceListPage = async (): Promise<JSX.Element | null> => {
  const { data: products } = (await supabase.from('products').select('*'));
  const { data: treatments } = (await supabase.from('treatments').select('*'));

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
