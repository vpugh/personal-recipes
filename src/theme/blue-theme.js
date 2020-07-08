import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

export default responsiveFontSizes(
  CreateMuiTheme({
    typography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        lineHeight: 1.1,
      },
    },
    palette: {
      background: {
        white: '#fefefe',
        main: '#E2FAFF',
        default: '#c8f2fb', // B0
      },
      primary: {
        main: '#a7edfd', // B1
        secondary: '#6bd7ef', // B2
        tertiary: '#22abc7', //B3
        pale: '#c8f2fb', // B!
      },
      grey: {
        one: '#575757',
      },
      success: {
        main: '#349a4a',
        light: '#69cc77',
        dark: '#006b1f',
      },
    },

    /**
     * Overriding components CSS.
     *
     * @see https://material-ui.com/customization/globals/#css
     */
    overrides: {
      PrivateRadioButtonIcon: {
        layer: {
          left: 0,
        },
      },
    },

    /**
     * Overriding components default properties.
     *
     * @see https://material-ui.com/customization/globals/#default-props
     */
    props: {
      MuiGrid: {
        spacing: 1,
      },
    },
  })
);
