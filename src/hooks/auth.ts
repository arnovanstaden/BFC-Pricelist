import { notify } from '@lib/notification';
import supabase from '@lib/supabase';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthVerifySession = () => {
  const nextRouter = useRouter();
  const pathname = usePathname();

  const verifyAuth = async () => {
    const result = await supabase.auth.getSession();
    const session = result.data.session;

    if (!session) {
      return nextRouter.replace('/dashboard/login');
    }

    if (session && pathname === '/dashboard/login') {
      return nextRouter.replace('/dashboard');
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);
}

export const useAuthLogin = () => {
  const nextRouter = useRouter();

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => supabase.auth.signInWithPassword(credentials)
    .then((res) => {
      const session = res.data.session;
      if (session) {
        notify('Welcome Back!');
        return nextRouter.replace('/dashboard');
      }

      notify('Incorrect Credentials');
    })

  return { handleLogin };
}