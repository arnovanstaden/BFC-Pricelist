'use client';

import supabase from '@lib/supabase';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import DashboardLoginForm from '@components/admin/auth/DashboardLoginForm';

const AuthWrapper = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  const [sessionState, setSession] = useState<Session | null | undefined>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, []);

  useEffect(() => {
  }, [sessionState]);

  if (sessionState === undefined) return null;

  if (sessionState === null) {
    return <DashboardLoginForm />
  }

  return (
    <>
      {children}
    </>
  );
};

export default AuthWrapper;
