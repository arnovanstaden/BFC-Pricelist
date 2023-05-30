import SideBar from './components/SideBar';
import { Grid, Container } from '@my-mui/material';

const ManagementLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} lg={2}>
        <SideBar />
      </Grid>

      <Grid item justifyContent="center" xs={12} md={9} lg={10}>
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
