import { Button, Grid, Typography } from '@my-mui/material';
import Treatment from '@components/items/Treatment';
import supabase from '@lib/supabase';
import Link from 'next/link';

export const revalidate = 0;

const TreatmentsPage = async (): Promise<JSX.Element | null> => {
  const { data: treatments } = await supabase.from('treatments').select('*');

  if (!treatments || treatments.length < 0) {
    return <Typography >No Treatments</Typography>;
  }

  return (
    <>
      <Grid container justifyContent="right" sx={{ marginBottom: '1rem' }}>
        <Link href="/dashboard/treatments/new">
          <Button variant="contained">
            New Treatment
          </Button>
        </Link>
      </Grid>
      {treatments.map((treatment) => <Treatment key={treatment.id} treatment={treatment} admin />)}
    </>
  )
};

export default TreatmentsPage;