import { notify } from 'src/utils/notifications';
import supabase from '@lib/supabase';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
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

      notify('Incorrect Credentials', 'error');
    })

  const logoutUser = async () => {
    await supabase.auth.signOut();
    notify('Bye!');
  };


  return { handleLogin, logoutUser };
}