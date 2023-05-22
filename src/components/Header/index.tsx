import styles from './styles.module.scss';
import LogoImg from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, WhatsApp } from '@my-mui/icons-material';
import { IconButton, Button } from '@my-mui/material';
import LogoutButton from './LogoutButton';

const Header = ({ admin }: { admin?: boolean }): JSX.Element | null => {
  return (
    <header className={styles.Header}>
      <Link href="/" className={styles.logo}>
        <Image width={120} src={LogoImg} alt="BFC Logo" />
      </Link>


      <div className={styles.social}>
        {!admin
          ? (
            <>
              <IconButton disableRipple href='https://wa.me/+27838704445' target="_blank">
                <WhatsApp className={styles.icon} />
              </IconButton>
              <IconButton disableRipple href='https://www.instagram.com/beautoxandfillerclinic/?hl=en' target="_blank">
                <Instagram className={styles.icon} />
              </IconButton>
              <IconButton disableRipple href='https://www.facebook.com/Beautox' target="_blank">
                <Facebook className={styles.icon} />
              </IconButton>
            </>
          )
          : <LogoutButton />}
      </div>
    </header>
  );
}

export default Header;
