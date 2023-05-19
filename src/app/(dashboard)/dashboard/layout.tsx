import Header from '@components/Header';

export const metadata = {
  title: 'Dashboard | The Beautox and Filler Clinic',
}

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header admin />
      <main>
        {children}
      </main>
    </>
  )
}

export default DashboardLayout;
