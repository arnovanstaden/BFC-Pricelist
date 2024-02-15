import { Box } from '@mui/material';
import Heading from '../../components/admin/layout/Heading/Heading';
import Product from '../../components/website/pricelist/Product';
import Treatment from '../../components/website/pricelist/Treatment';
import { getProducts } from '@lib/products';
import { getTreatments } from '@lib/treatments';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : undefined;

const PriceListPage = async (): Promise<JSX.Element | null> => {
  const products = await getProducts({ column: 'name' });
  const treatments = await getTreatments({ column: 'name' });

  return (
    <>
      {treatments && treatments?.length > 0 && (
        <>
          <Heading>
            Treatments
          </Heading>

          {treatments?.map((treatment) => <Treatment key={treatment.id} treatment={treatment} />)}
        </>
      )}

      <Box sx={{ paddingTop: '3rem' }} />
      {
        products && products.length > 0 && (
          <>
            <Heading>
              Products
            </Heading>
            {products?.map((product) => <Product key={product.id} product={product} />)}
          </>
        )
      }
    </>
  );
};

export default PriceListPage;
