import { Typography, Divider } from '@mui/material';
import styles from './Heading.module.scss';

const Heading = ({ children }: { children: string }): JSX.Element | null => {
  return (
    <>
      <Typography variant="h3" className={styles.Heading}>
        {children}
      </Typography>
      <Divider sx={{ marginBottom: '2rem' }} />
    </>
  );
};

export default Heading;
