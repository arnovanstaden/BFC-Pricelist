import { Chip, Typography } from '@my-mui/material';
import styles from './styles.module.scss';
import { Product } from '@lib/supabase/types';

const Product = (product: Product): JSX.Element | null => {
  return (
    <div className={styles.Product}>
      <div className={styles.text}>
        <Typography variant="subtitle1" className={styles.brand}>{product.brand}</Typography>

        <div className={styles.name}>
          <Typography variant="h5">{product.name}</Typography>
          <Chip label={product.range} size="small" />
        </div>
        <Typography variant="body1" paragraph>
          {product.usage}
        </Typography>
      </div>
      <div className={styles.price}>
        <Typography variant="h6">R {product.price}</Typography>
        <Typography variant="caption" className={styles.unit}>{product.size}</Typography>
      </div>
    </div>
  );
};

export default Product;
