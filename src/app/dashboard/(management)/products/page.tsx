import { Button, Grid, Typography } from '@my-mui/material';
import Product from '@components/items/Product';
import supabase from '@lib/supabase';
import Link from 'next/link';

export const revalidate = 0;

const TreatmentsPage = async (): Promise<JSX.Element | null> => {
  const { data: products } = await supabase.from('products').select('*').order('range', { ascending: true })

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


      {products.map((product) => <Product key={product.id} product={product} admin />)}
    </>
  )
};

export default TreatmentsPage;