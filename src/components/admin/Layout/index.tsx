import { Button, Grid, List, ListItem, ListItemButton, ListItemText, SpeedDial, SpeedDialAction, SpeedDialIcon, Tooltip } from '@mui/material';
import styles from './styles.module.scss';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ScienceIcon from '@mui/icons-material/Science';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardLayout = (): JSX.Element | null => {
  const [open, setOpen] = useState(false);
  const nextRouter = useRouter()

  return (
    <Grid container className={styles.DashboardLayout}>
      <Grid item component="aside">
        <List>
          <ListItem>
            <Link className={styles.link} href="/admin/services">
              <Button fullWidth variant="contained">
                Services
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link className={styles.link} href="/admin/products">
              <Button fullWidth variant="outlined">
                Products
              </Button>
            </Link>
          </ListItem>
        </List>
      </Grid>

      <Grid item>

      </Grid>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        icon={<SpeedDialIcon />}
        open={open}
        onClick={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <SpeedDialAction
          tooltipTitle="Product"
          tooltipOpen
          tooltipPlacement="right"
          icon={<ScienceIcon />}
          onClick={() => nextRouter.push('/admin/add/product')}
        />
        <SpeedDialAction
          tooltipTitle="Service"
          tooltipPlacement="right"
          tooltipOpen
          icon={<VaccinesIcon />}
          onClick={() => nextRouter.push('/admin/add/service')}
        />
      </SpeedDial>
    </Grid>
  );
};

export default DashboardLayout;
