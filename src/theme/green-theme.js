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
        main: '#e4fbf1', // I
        default: '#b8f7dc', // 0
      },
      primary: {
        main: '#a3f5d2', // 1
        secondary: '#8CF0C6', // 2
        tertiary: '#0ad07d', // 3
        pale: '#bfffe4', // 4
        dark: '#128756',
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
