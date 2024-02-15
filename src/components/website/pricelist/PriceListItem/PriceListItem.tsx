import { IProduct, ITreatment } from '@types';
import styles from './PriceListItem.module.scss';
import { Chip, Typography } from '@mui/material';

type Props =
  | { product: IProduct; treatment?: never }
  | { product?: never; treatment: ITreatment };

const PriceListItem: React.FC<Props> = (props) => {
  if ('product' in props && props.product) {
    const { product } = props;

    return (
      <div className={styles.PriceListItem}>
        <div className={styles.nameAndBrand}>
          <div className={styles.name}>
            <Typography variant="h5" className={styles.name}>{product.name}</Typography>
            {product.range && <Chip label={product.range} size="small" className={styles.chip} />}
          </div>
          <Typography variant="subtitle1" className={styles.brand}>{product.brand}</Typography>
        </div>

        <div className={styles.priceAndUnit} >
          <Typography variant="h6" className={styles.price}>R {product.price}</Typography>
          <Typography variant="caption" className={styles.unit}>{product.size}</Typography>
        </div>

        <Typography variant="body1" paragraph className={styles.description}>
          {product.description}
        </Typography>
      </div>
    );
  }

  const { treatment } = props;

  return (
    <div className={styles.PriceListItem}>
      <div className={styles.nameAndBrand}>
        <div className={styles.name}>
          <Typography variant="h5" className={styles.name}>{treatment.name}</Typography>
          {treatment.range && <Chip label={treatment.range} size="small" className={styles.chip} />}
        </div>
        <Typography variant="subtitle1" className={styles.brand}>{treatment.brand}</Typography>
      </div>

      <div className={styles.priceAndUnit} >
        <Typography variant="h6" className={styles.price}>R {treatment.price}</Typography>
        <Typography variant="caption" className={styles.unit}>{treatment.unit}</Typography>
      </div>

      {treatment.usage && (
        <Typography variant="body1" paragraph className={styles.usage}>
          {treatment.usage}
        </Typography>
      )}

      <Typography variant="body1" paragraph className={styles.description}>
        {treatment.description}
      </Typography>
    </div>
  );
};

export default PriceListItem;
