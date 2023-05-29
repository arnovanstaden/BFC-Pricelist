import { Divider, Typography } from '@my-mui/material';
import ManageTreatment from '../../components/ManageTreatment';
import supabase from '@lib/supabase';

interface IProps {
  params: {
    id: string;
  }
}

export const revalidate = 0;

const EditPage = async ({ params }: IProps): Promise<JSX.Element | null> => {
  const { data: treatments } = (await supabase.from('treatments').select().eq('id', params.id));

  if (!treatments) return null;
  const treatment = treatments[0]


  return (
    <>
      <Typography variant="h2">Edit Treatment</Typography>
      <Divider sx={{ margin: '1rem 0 2rem' }} light />
      <ManageTreatment dbTreatment={treatment} addNew={false} />
    </>
  );
}


export default EditPage;
