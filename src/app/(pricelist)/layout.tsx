import Header from '@components/Header';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Pricelist | The Beautox and Filler Clinic',
  description: 'The Beautox & Filler Clinic is an Aesthetic Medical Practice focusing on the optimal use of non-surgical procedures to restore & enhance beauty features.',
}

const PriceListLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default PriceListLayout;
