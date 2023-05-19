'use client';

import { ThemeProvider, createTheme, ThemeOptions, StyledEngineProvider } from '@mui/material/styles';
import typography from './typography';
import { palette } from './palette';
import React from 'react';
import { CssBaseline, Shadows } from '@mui/material';

export const Theme = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
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
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          {children}
        </StyledEngineProvider>
      </ThemeProvider>
    </div >
  );
};
