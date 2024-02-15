import { Divider, Typography } from '@mui/material';
import ManageTreatment from '../../../../../components/admin/manage/ManageTreatment';
import { getTreatment } from '@lib/treatments';
import { notFound } from 'next/navigation';

interface IProps {
  params: {
    id: string;
  }
}

export const revalidate = 0;

const EditPage = async ({ params }: IProps): Promise<JSX.Element | null> => {
  const treatment = await getTreatment(params.id)

  if (!treatment) return notFound();

  return (
    <>
      <Typography variant="h2">Edit Treatment</Typography>
      <Divider sx={{ margin: '1rem 0 2rem' }} light />
      <ManageTreatment treatment={treatment} addNew={false} />
    </>
  );
}


export default EditPage;
