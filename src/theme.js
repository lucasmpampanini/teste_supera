import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#E85D04',
    },
    secondary: {
      main: '#DC2F02' ,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
  },
});

export default theme;