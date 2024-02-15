import { Divider, Typography } from '@mui/material';
import ManageProduct from '../../../../../components/admin/manage/ManageProduct';
import { getProduct } from '@lib/products';
import { notFound } from 'next/navigation';

interface IProps {
  params: {
    id: string;
  }
}

export const revalidate = 0;

const EditPage = async ({ params }: IProps): Promise<JSX.Element | null> => {
  const product = await getProduct(params.id)

  if (!product) return notFound();

  return (
    <>
      <Typography variant="h2">Edit Product</Typography>
      <Divider sx={{ margin: '1rem 0 2rem' }} light />
      <ManageProduct product={product} addNew={false} />
    </>
  );
}


export default EditPage;
