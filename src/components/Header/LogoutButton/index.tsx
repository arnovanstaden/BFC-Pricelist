'use client';

import { useRouter } from 'next/navigation';
import { Instagram, Facebook, Logout } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import supabase from '@lib/supabase';
import { notify } from '@lib/notification';

const LogoutButton = (): JSX.Element | null => {
  const nextRouter = useRouter();

  const logoutUser = async () => {
    await supabase.auth.signOut();
    notify('Bye!');
    nextRouter.replace('/dashboard/login');
  };

  return (
    <IconButton disableRipple onClick={logoutUser} >
      <Logout />
    </IconButton>
  );
};

export default LogoutButton;
