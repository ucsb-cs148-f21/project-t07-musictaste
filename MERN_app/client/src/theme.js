import { createTheme, ThemeProvider } from "@material-ui/core";
import { yellow, green } from "@material-ui/core/colors";
import Raleway from "./fonts/Raleway/static/Raleway-Regular.ttf";
import OpenSans from "./fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf";
import Bebas_Neue from "./fonts/Bebas_Neue/BebasNeue-Regular.ttf";

const raleway = "'Raleway', sans-serif";
const openSans = "'Open Sans', sans-serif";
const rubik = "'Rubik', rubik";
const almarai = "'Almarai', almarai";

// const raleway = {
//     fontFamily: 'Raleway',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: '400',
//     src: `
//         url(${Raleway}) format('truetype')
//     `,};

// const opensans = {
//     fontFamily: 'Open Sans',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: '400',
//     src: `
//         local('Open Sans'),
//         local('OpenSans-Regular'),
//         url(${OpenSans}) format('ttf')
//     `,};

// const bebasneue = {
//     fontFamily: 'Bebas Neue',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: '400',
//     src: `
//         url(${Bebas_Neue}) format('truetype')
//     `,
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#9DB5B2",
      light: "94D1BE",
      dark: "#3B413C",
      // contrastText: "DAF0EE" this is what needed to be commented out. It caused an error with the search tags
      // main: "#4C061D" // ,
      // light:"#71092C",
      // dark: "#390516",
      // contrastText:
    },
    secondary: {
      main: "#AA767C",
      light: "#FAD4D8",
      dark: "#4C061D",
    },
  },
  typography: {
    fontFamily: { raleway, openSans, rubik, almarai},
  },
});

export default theme;
