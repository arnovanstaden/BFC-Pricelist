import Header from '@components/Header';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Dashboard | The Beautox and Filler Clinic',
}


const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header admin />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default DashboardLayout;
