import { Chip, Typography } from '@my-mui/material';
import styles from '../styles.module.scss';
import { IProduct } from '@lib/supabase/types';
import classNames from 'classnames';
import { Edit } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

interface IProps {
  product: IProduct;
  admin?: boolean;
}

const Product = ({ product, admin }: IProps): JSX.Element | null => {
  const classes = classNames(
    styles.Item,
    admin && styles.admin
  );

  return (
    <div className={classes}>
      <div className={styles.top}>
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

        {admin && (
          <div className={styles.actions}>
            <Link href={`/dashboard/products/${product.id}`}>
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
            <DeleteButton id={product.id} />
          </div>
        )}
      </div>

      {!admin && (
        <Typography variant="body1" paragraph className={styles.description}>
          {product.usage}
        </Typography>
      )}
    </div>
  )
};

export default Product;
