import Heading from '../../components/atoms/Heading/Heading';
import { getProducts } from '@lib/products';
import { getTreatments } from '@lib/treatments';
import styles from './styles.module.scss';
import PriceListItem from '@components/website/pricelist/PriceListItem/PriceListItem';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : undefined;

const PriceListPage = async (): Promise<JSX.Element | null> => {
  const products = await getProducts({ column: 'name' });
  const treatments = await getTreatments({ column: 'name' });

  return (
    <div className={styles.PriceListPage}>
      {treatments && treatments?.length > 0 && (
        <div className={styles.treatments}>
          <Heading>
            Treatments
          </Heading>

          <div className={styles.list}>
            {treatments?.map((treatment) => <PriceListItem key={treatment.id} treatment={treatment} />)}
          </div>
        </div>
      )}
      {
        products && products.length > 0 && (
          <div className={styles.products}>
            <Heading>
              Products
            </Heading>
            <div className={styles.list}>
              {products?.map((product) => <PriceListItem key={product.id} product={product} />)}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default PriceListPage;
