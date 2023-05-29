'use client';

import { useAuth } from '@hooks/auth';

const AuthWrapper = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  useAuth();

  return (
    <>
      {children}
    </>
  );
};

export default AuthWrapper;
