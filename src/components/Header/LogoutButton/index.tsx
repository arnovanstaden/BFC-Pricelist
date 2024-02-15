'use client';

import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { useAuth } from '@hooks/auth';

const LogoutButton = (): JSX.Element | null => {
  const { logoutUser } = useAuth();

  return (
    <IconButton disableRipple onClick={logoutUser} >
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;
