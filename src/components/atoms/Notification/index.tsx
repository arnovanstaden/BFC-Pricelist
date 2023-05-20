'use client';

import { ToastContainer } from 'react-toastify';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Notification = (): JSX.Element => (
  <ToastContainer
    position="top-center"
    autoClose={3000}
    closeOnClick
    pauseOnHover
    hideProgressBar
    icon={false}
    closeButton={false}
    limit={2}
    className={styles.notificationContainer}
  />
);

export default Notification;