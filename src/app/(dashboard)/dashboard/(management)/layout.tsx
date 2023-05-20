'use client';

import { Button, Grid, List, ListItem } from '@my-mui/material';
import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

const ManagementLayout = async ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const links = [{
    text: 'Treatments',
    href: '/dashboard'
  }, {
    text: 'Products',
    href: '/dashboard/products'
  }];

  return (
    <Grid container className={styles.ManagementLayout}>
      <Grid item component="aside" className={styles.sideBar}>
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
      </Grid>

      <Grid item>
        {children}
      </Grid>
    </Grid>
  );
}

export default ManagementLayout;
