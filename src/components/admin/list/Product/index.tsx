import { Chip, Typography } from '@mui/material';
import styles from '../styles.module.scss';
import { IProduct } from '@lib/supabase/types';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import DeleteButton from '../atoms/DeleteButton';

interface IProps {
  product: IProduct;
}

const AdminProduct = ({ product }: IProps): JSX.Element | null => (
  <div className={styles.Item}>
    <div>
      <div className={styles.name}>
        <Typography variant="h5">{product.name}</Typography>
        {product.range && <Chip label={product.range} size="small" />}
      </div>
      <Typography variant="subtitle1" className={styles.brand}>{product.brand}</Typography>
    </div>

    <div className={styles.price}>
      <Typography variant="h6">R {product.price}</Typography>
      <Typography variant="caption" className={styles.unit}>{product.size}</Typography>
    </div>

    <div className={styles.actions}>
      <Link href={`/dashboard/products/${product.id}`}>
        <IconButton>
          <Edit />
        </IconButton>
      </Link>
      <DeleteButton id={product.id} type="product" />
    </div>
  </div>
);

export default AdminProduct;
