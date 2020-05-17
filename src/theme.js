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
      },
      primary: {
        main: '#FFADAD', // Flamingo P1
        secondary: '#FF8585', // Grapefruit P2
        tertiary: '#FF5A5F', // Ruby Pink P3 dd4048 P4??
        pale: '#FFCCCC', // Cotton Candy P0
      },
      pink: {
        background: {
          main: '#FFEDED',
          default: '#FFCCCC', // Cotton Candy P0
        },
        primary: {
          main: '#FFADAD', // Flamingo P1
          secondary: '#FF8585', // Grapefruit P2
          tertiary: '#FF5A5F', // Ruby Pink P3 dd4048 P4??
          pale: '#FFCCCC', // Cotton Candy P0
        },
      },
      blue: {
        background: {
          main: '#E2FAFF',
          default: '#CCF6FF', // B0
        },
        primary: {
          main: '#B8F1FE', // B1
          secondary: '#A6E9F8', // B2
          tertiary: '#56CAE3', //B3
          pale: '#B8F1FE', // B!
        },
      },
      purple: {
        background: {
          main: '#FAEEFF', // I
          default: '#F5E1FF', // 0
        },
        primary: {
          main: '#F1D9FC', // 1
          secondary: '#DCBBEC', // 2
          tertiary: '#BE90D3', // 3
          pale: '#F1D9FC', // 1
        },
      },
      green: {
        background: {
          main: '#E7FFF5', // I
          default: '#C4FFE6', // 0
        },
        primary: {
          main: '#88FACA', // 1
          secondary: '#8CF0C6', // 2
          tertiary: '#11DC87', // 3
          pale: '#88FACA', // 4
        },
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
