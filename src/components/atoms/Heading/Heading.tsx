import { Typography, Divider } from '@mui/material';
import styles from './Heading.module.scss';

const Heading = ({ children }: { children: string }): JSX.Element | null => {
  return (
    <div className={styles.Heading}>
      <Typography variant="h3" >
        {children}
      </Typography>
      <Divider />
    </div>
  );
};

export default Heading;
