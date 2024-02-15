import { Chip, Typography } from '@mui/material';
import styles from '../styles.module.scss';
import { IProduct } from '@lib/supabase/types';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps): JSX.Element | null => (
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

  </div>
);

export default Product;
