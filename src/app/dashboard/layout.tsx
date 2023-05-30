import { Metadata } from 'next';
import Header from '@components/Header';
import AuthWrapper from '@components/AuthWrapper';
import Notification from '@components/atoms/Notification';

export const metadata: Metadata = {
  title: 'Dashboard | The Beautox and Filler Clinic',
}

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <Header admin />
      <main>
        {children}
      </main>

      <Notification />
    </AuthWrapper>
  )
}

export default DashboardLayout;
