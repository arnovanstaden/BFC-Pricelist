import { PaletteOptions, } from '@mui/material';


export const common = {
  primary: {
    main: '#000000',
  },
  secondary: {
    main: '#2e2e2e',
  },
  info: {
    light: '#61F3F3',
    main: '#00B8D9',
    dark: '#006C9C',
    contrastText: '#fff',
  },
  success: {
    light: '#86E8AB',
    main: '#36B37E',
    dark: '#1B806A',
  },
  warning: {
    light: '#FFD666',
    main: '#FFAB00',
    dark: '#B76E00',
  },
  error: {
    light: '#FFAC82',
    main: '#FF5630',
    dark: '#B71D18',
    contrastText: '#fff',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
};

export const palette: PaletteOptions = {
  ...common,
  mode: 'light',
  background: {
    default: '#fefefe',
  },
  divider: '#000000',
  text: {
    primary: '#000000',
    secondary: '#2e2e2e',
    disabled: '#cccccc',
  },
};
