import { TypographyOptions } from '@mui/material/styles/createTypography';

export const pxToRem = (value: number): string => `${value / 16}rem`;

const typography: TypographyOptions = {
  fontSize: 14,
  fontWeightRegular: 300,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontFamily: 'inherit',
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    color: 'GrayText'
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    color: 'GrayText'
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 300,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    color: 'GrayText'
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
