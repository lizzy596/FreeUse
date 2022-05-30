import * as React from 'react';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#3B3561',
        dark: '#060B0F',
        light: '#4075A0',
        contrast: '#fff'
      },
      secondary: {
        main: '#D1D1D1',
        //main: '#C1DCEB',
        dark: '#FBEFEF',
        light: '#00888f',
        contrast: '#fff'
      },
      error: {
        main: '#ff002b',
        dark: '#D2042D',
        light: '#f56777',
        contrast: '#fff'
      },
      warning: {
        main: '#E75A0D',
        dark: '#940d1d',
        light: '#f56777',
        contrastText: '#fff'
      },
      info: {
        //main: '#51A3A3',
        //main: '#08e8de',
        main: '#2c9c91',
        contrastText: '#fff'
      },
     /* success: {
        main: '#c4e099',
        dark: '#940d1d',
        light: '#f56777',
        contrastText: '#fff'
      }, */
    }
    
  });
