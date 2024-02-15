import { Divider, Typography } from '@mui/material';
import supabase from '@lib/supabase';
import ManageProduct from '../../../../../components/admin/manage/ManageProduct';

interface IProps {
  params: {
    id: string;
  }
}

export const revalidate = 0;

const EditPage = async ({ params }: IProps): Promise<JSX.Element | null> => {
  const { data: products } = (await supabase.from('products').select().eq('id', params.id));

  if (!products) return null;
  const product = products[0]


  return (
    <>
      <Typography variant="h2">Edit Product</Typography>
      <Divider sx={{ margin: '1rem 0 2rem' }} light />
      <ManageProduct product={product} addNew={false} />
    </>
  );
}


export default EditPage;
