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
        main: '#FFEDED',
        default: '#FFCCCC', // Cotton Candy P0
      },
      primary: {
        main: '#FFADAD', // Flamingo P1
        secondary: '#FF8585', // Grapefruit P2
        tertiary: '#FF5A5F', // Ruby Pink P3 dd4048 P4??
        pale: '#FFCCCC', // Cotton Candy P0
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
