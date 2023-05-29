'use client';

import { Logout } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import { useAuth } from '@hooks/auth';

const LogoutButton = (): JSX.Element | null => {
  const { logoutUser } = useAuth();


  return (
    <IconButton disableRipple onClick={logoutUser} >
      <Logout />
    </IconButton>
  );
};

export default LogoutButton;
