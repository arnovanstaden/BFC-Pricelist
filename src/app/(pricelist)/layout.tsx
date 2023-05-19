import Header from '@components/Header';
import { Container, Grid } from '@my-mui/material';


export const metadata = {
  title: 'Pricelist | The Beautox and Filler Clinic',
  description: 'The Beautox & Filler Clinic is an Aesthetic Medical Practice focusing on the optimal use of non-surgical procedures to restore & enhance beauty features.',
}

const PriceListLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>
    </>
  )
}

export default PriceListLayout;
