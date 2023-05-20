import SideBar from './components/SideBar';
import { Grid, Container } from '@my-mui/material';

const ManagementLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <Grid container>
      <Grid item xs={0} md={2} xl={1}>
        <SideBar />
      </Grid>

      <Grid item justifyContent="center" xs={12} md={10} xl={11}>
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          {children}
        </Container>
      </Grid>
    </Grid>
  );
}

export default ManagementLayout;
