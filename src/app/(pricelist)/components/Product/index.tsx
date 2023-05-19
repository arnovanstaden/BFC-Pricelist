import { Typography } from '@my-mui/material';
import styles from './styles.module.scss';

const Product = (): JSX.Element | null => {
  return (
    <div className={styles.Product}>
      <div className={styles.text}>
        <div className={styles.name}>
          <Typography variant="h4">Foam Cleanser</Typography>
          <Typography variant="subtitle2">Filorga</Typography>
        </div>
        <Typography variant="body1">Gently cleans and perfectly removes makeup. Contains hyaluronic acid for a younger looking skin.</Typography>
      </div>
      <div className={styles.price}>
        <Typography variant="h4">R 123</Typography>
        <Typography variant="caption">500 ml</Typography>
      </div>
    </div>
  );
};

export default Product;
