import { Chip, Typography } from '@my-mui/material';
import styles from './styles.module.scss';

const Product = (): JSX.Element | null => {
  return (
    <div className={styles.Product}>
      <div className={styles.text}>
        <Typography variant="subtitle1" className={styles.brand}>Filorga</Typography>

        <div className={styles.name}>
          <Typography variant="h5">Foam Cleanser</Typography>
          <Chip label="Cleanser" size="small" />
        </div>
        <Typography variant="body1" paragraph>Gently cleans and perfectly removes makeup. Contains hyaluronic acid for a younger looking skin.</Typography>
      </div>
      <div className={styles.price}>
        <Typography variant="h6">R 123</Typography>
        <Typography variant="caption" className={styles.unit}>500 ml</Typography>
      </div>
    </div>
  );
};

export default Product;
