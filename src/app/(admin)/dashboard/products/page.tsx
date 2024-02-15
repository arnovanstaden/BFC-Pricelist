import { Button, Grid, Typography } from '@mui/material';
import Product from '../../../../components/admin/list/Product';
import Link from 'next/link';
import { getProducts } from '@lib/products';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : undefined;

const ProductsPage = async (): Promise<JSX.Element | null> => {
  const products = await getProducts({ column: 'name' });

  if (!products || products.length < 0) {
    return <Typography >No Products</Typography>;
  }

  return (
    <>
      <Grid container justifyContent="right" sx={{ marginBottom: '1rem' }}>
        <Link href="/dashboard/products/new">
          <Button variant="contained">
            New Product
          </Button>
        </Link>
      </Grid>


      {products.map((product) => <Product key={product.id} product={product} />)}
    </>
  )
};

export default ProductsPage;