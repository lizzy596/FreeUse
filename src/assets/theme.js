import { createTheme } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: blue[200],
        secondary:green[600]
      },
});

export default theme;