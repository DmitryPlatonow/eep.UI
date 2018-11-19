import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#26a69a',
      main: '#26a69a',
      dark: '#1a746b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33cbb7',
      main: '#00bfa5',
      dark: '#008573',
      contrastText: '#fff',
    },
  },
  typography: { useNextVariants: true }
});
