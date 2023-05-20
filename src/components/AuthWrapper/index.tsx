'use client';

import { useAuthVerifySession } from '@hooks/auth';

const AuthWrapper = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  useAuthVerifySession();

  return (
    <>
      {children}
    </>
  );
};

export default AuthWrapper;
