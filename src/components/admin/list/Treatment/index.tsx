import { Chip, Typography } from '@mui/material';
import styles from '../styles.module.scss';
import { ITreatment } from '@lib/supabase/types';
import { Edit } from '@mui/icons-material/';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import DeleteButton from '../atoms/DeleteButton';

interface IProps {
  treatment: ITreatment;
}

const AdminTreatment = ({ treatment }: IProps): JSX.Element | null => (
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

    <div className={styles.actions}>
      <Link href={`/dashboard/treatments/${treatment.id}`}>
        <IconButton>
          <Edit />
        </IconButton>
      </Link>
      <DeleteButton id={treatment.id} type="treatment" />
    </div>
  </div>
);

export default AdminTreatment;
