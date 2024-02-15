import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Treatment from '../../../../components/admin/list/Treatment';
import { getTreatments } from '@lib/treatments';

export const revalidate = 0;

const TreatmentsPage = async (): Promise<JSX.Element | null> => {
  const treatments = await getTreatments({ column: 'name' });

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


      {treatments.map((treatment) => <Treatment key={treatment.id} treatment={treatment} />)}
    </>
  )
};

export default TreatmentsPage;