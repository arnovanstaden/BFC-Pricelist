'use client';

import styles from './styles.module.scss';
import { Button, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useAuth } from '@hooks/auth';

const DashboardLoginForm = (): JSX.Element | null => {
  const { handleLogin } = useAuth()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin(credentials)
  }

  return (
    <div className={styles.DashboardLogin}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Typography variant='h3'>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          name='email'
          fullWidth
          value={credentials.email}
          onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
        />
        <TextField
          label="Password"
          type="password"
          name='password'
          fullWidth
          value={credentials.password}
          onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          fullWidth
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default DashboardLoginForm;
