import { Typography, Divider } from '@my-mui/material';

const Heading = ({ children }: { children: string }): JSX.Element | null => {
  return (
    <div>
      <Typography variant="h3">
        {children}
      </Typography>
      <Divider sx={{ marginBottom: '2rem' }} />
    </div >
  );
};

export default Heading;
