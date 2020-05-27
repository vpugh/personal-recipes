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
        default: '#FFCCCC',
        white: '#fefefe',
      },
      primary: {
        main: '#FFADAD',
        secondary: '#FF8585',
        tertiary: '#FF5A5F',
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
      // MuiPaper: {
      //   root: {
      //     padding: spacing * 2,
      //   },
      // },
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
