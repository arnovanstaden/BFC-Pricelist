'use client';

import { Button, List, ListItem, Box } from '@mui/material';
import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

const SideBar = (): JSX.Element | null => {
  const pathname = usePathname();

  const links = [{
    text: 'Treatments',
    href: '/dashboard'
  }, {
    text: 'Products',
    href: '/dashboard/products'
  }];

  return (
    <Box component="aside" className={styles.SideBar}>
      <List>
        {links.map((link) => (
          <ListItem key={link.text}>
            <Link className={styles.link} href={link.href}>
              <Button fullWidth variant={pathname === link.href ? 'contained' : 'outlined'}>
                {link.text}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
