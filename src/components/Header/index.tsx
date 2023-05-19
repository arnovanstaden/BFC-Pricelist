import styles from './styles.module.scss';
import LogoImg from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook } from '@icons';
import { IconButton } from '@my-mui';

const Header = ({ admin }: { admin?: boolean }): JSX.Element | null => (
  <header className={styles.Header}>
    <Link href="/" className={styles.logo}>
      <Image width={120} src={LogoImg} alt="BFC Logo" />
    </Link>

    {!admin && (
      <div className={styles.social}>
        <IconButton disableRipple href='https://www.instagram.com/beautoxandfillerclinic/?hl=en' target="_blank">
          <Instagram className={styles.icon} />
        </IconButton>
        <IconButton disableRipple href='https://www.facebook.com/Beautox' target="_blank">
          <Facebook className={styles.icon} />
        </IconButton>
      </div>
    )}
  </header>
);

export default Header;
