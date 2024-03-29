import { Metadata } from 'next';
import Header from '@components/Header';
import AuthWrapper from '@components/admin/auth/AuthWrapper';
import { Grid, Container } from '@mui/material';
import SideBar from '../../../components/admin/layout/SideBar';

export const metadata: Metadata = {
  title: 'Dashboard | The Beautox and Filler Clinic',
}

export const revalidate = 0;

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <Header admin />
      <main>
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
      </main>
    </AuthWrapper>
  )
}

export default DashboardLayout;
