import { Chip, Typography } from '@my-mui/material';
import styles from '../styles.module.scss';
import { ITreatment } from '@lib/supabase/types';

interface IProps {
  treatment: ITreatment;
}

const Treatment = ({ treatment }: IProps): JSX.Element | null => (
  <div className={styles.Item}>
    <div>
      <div className={styles.name}>
        <Typography variant="h5">{treatment.name}</Typography>
        {treatment.range && <Chip label={treatment.range} size="small" />}
      </div>
      <Typography variant="subtitle1" className={styles.brand}>{treatment.brand}</Typography>
    </div>

    <div className={styles.price}>
      <Typography variant="h6">R {treatment.price}</Typography>
      <Typography variant="caption" className={styles.unit}>{treatment.unit}</Typography>
    </div>

    <Typography variant="body1" paragraph className={styles.description}>
      {treatment.description}
    </Typography>
  </div>
);

export default Treatment;
