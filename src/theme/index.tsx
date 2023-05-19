'use client';

import { ThemeProvider, createTheme, ThemeOptions, StyledEngineProvider } from '@mui/material/styles';
import typography from './typography';
import { palette } from './palette';
import React from 'react';
import { CssBaseline, Shadows } from '@mui/material';
import { Josefin_Sans } from 'next/font/google'
import classNames from 'classnames';
import Theano_Ditot from 'next/font/local'

// Font files can be colocated inside of `pages`
const theanoDitot = Theano_Ditot({
  src: './TheanoDidot-Regular.ttf',
  variable: '--font-theano'
})
const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-josefin'
});

export const Theme = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  const fontClasses = classNames(
    theanoDitot.className,
    josefinSans.className,
  );

  const baseTheme: ThemeOptions = {
    palette,
    typography,
    shadows: Array(25).fill("none") as Shadows,
    shape: {
      borderRadius: 0
    }
  };

  // Update the theme only if the mode changes
  const theme = createTheme(baseTheme)

  return (
    <div className={fontClasses}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          {children}
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
};
