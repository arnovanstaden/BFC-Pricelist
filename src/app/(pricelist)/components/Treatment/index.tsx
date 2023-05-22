import { Chip, Typography } from '@my-mui/material';
import styles from './styles.module.scss';
import { Treatment } from '@lib/supabase/types';

const Treatment = (treatment: Treatment): JSX.Element | null => {
  return (
    <div className={styles.Treatment}>
      <div className={styles.text}>
        <Typography variant="subtitle1" className={styles.brand}>{treatment.brand}</Typography>

        <div className={styles.name}>
          <Typography variant="h5">{treatment.name}</Typography>
          <Chip label={treatment.range} size="small" />
        </div>
        <Typography variant="body1" paragraph>
          {treatment.description}
        </Typography>
      </div>
      <div className={styles.price}>
        <Typography variant="h6">R {treatment.price}</Typography>
        <Typography variant="caption" className={styles.unit}>{treatment.unit}</Typography>
      </div>
    </div>
  );
};

export default Treatment;
