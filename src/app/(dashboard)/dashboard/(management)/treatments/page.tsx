import { Box, Typography } from '@my-mui/material';
import Treatment from '@components/items/Treatment';
import supabase from '@lib/supabase';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : undefined;

const TreatmentsPage = async (): Promise<JSX.Element | null> => {
  const { data: treatments } = (await supabase.from('treatments').select('*'));

  if (!treatments || treatments.length < 0) {
    return <Typography >No Treatments</Typography>;
  }

  return (
    <>
      {treatments.map((treatment) => <Treatment key={treatment.id} treatment={treatment} admin />)}
    </>
  )
};

export default TreatmentsPage;