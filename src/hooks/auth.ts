import { notify } from '@lib/notification';
import supabase from '@lib/supabase';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuth = () => {
  const nextRouter = useRouter();
  const pathname = usePathname();

  const verifyAuth = async () => {
    const result = await supabase.auth.getSession();
    const session = result.data.session;

    if (!session) {
      document.cookie = "BFC-Auth=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      return nextRouter.replace('/dashboard/login');
    }

    if (session && pathname === '/dashboard/login') {
      return nextRouter.replace('/dashboard');
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => supabase.auth.signInWithPassword(credentials)
    .then((res) => {
      const session = res.data.session;
      if (session) {
        document.cookie = "BFC-Auth=true";
        notify('Welcome Back!');
        return nextRouter.replace('/dashboard');
      }

      notify('Incorrect Credentials');
    })

  const logoutUser = async () => {
    document.cookie = "BFC-Auth=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    await supabase.auth.signOut();
    notify('Bye!');
    nextRouter.replace('/dashboard/login');
  };


  return { handleLogin, logoutUser };
}