import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e9c46a', // Teal accent
    },
    // background: {
    //   default: "url(/background.png)"
    //   // default: '#264653', 
    // },
    text: {
      primary: '#e9c46a', // Light slate
      secondary: '#f4a261',
    },
  },
  typography: {
    fontFamily: '"Inconsolata", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.5rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    button: { textTransform: 'none' },
  },
  // overrides: {
  //   CssBaseline: {
  //     '@global': {
  //       body: {
  //         backgroundImage: `url(${backgroundImage})`,
  //         backgroundSize: 'cover',
  //         backgroundPosition: 'center',
  //         backgroundRepeat: 'no-repeat',
  //       },
  //     },
  //   },
  // },
});

export default theme;
