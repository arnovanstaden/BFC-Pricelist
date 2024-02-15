import Header from '@components/Header';
import { Container } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Beautox and Filler Clinic',
  description: 'The Beautox & Filler Clinic is an Aesthetic Medical Practice focusing on the optimal use of non-surgical procedures to restore & enhance beauty features.',
}

const PriceListLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <Container
          maxWidth="xl"
          sx={{
            padding: '2rem',
          }}
        >
          {children}
        </Container>
      </main>
    </>
  )
}

export default PriceListLayout;
