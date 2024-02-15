import styles from './styles.module.scss';
import LogoImg from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Typography } from '@mui/material';
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
                <WhatsAppIcon className={styles.icon} />
              </IconButton>
              <IconButton disableRipple href='https://www.instagram.com/beautoxandfillerclinic/?hl=en' target="_blank">
                <InstagramIcon className={styles.icon} />
              </IconButton>
              <IconButton disableRipple href='https://www.facebook.com/Beautox' target="_blank">
                <FacebookIcon className={styles.icon} />
              </IconButton>
            </>
          )
          : <LogoutButton />}
      </div>
      <div className={styles.printHeading}>
        <Typography variant="h4">Price List</Typography>
      </div>
    </header>
  );
}

export default Header;
