import { Divider, Typography } from '@mui/material';
import ManageTreatment from '../../../../../components/admin/manage/ManageTreatment';
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
      <ManageTreatment treatment={treatment} addNew={false} />
    </>
  );
}


export default EditPage;