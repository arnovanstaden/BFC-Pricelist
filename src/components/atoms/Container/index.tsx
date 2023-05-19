// Styles
import React from 'react';
import styles from './styles.module.scss';

const Container = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
