import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  hoverLink: {
    '&:hover': { cursor: 'pointer', opacity: '0.5' },
  },
  textColorPrimary: {
    color: theme.palette.primary.tertiary,
    marginTop: '2rem',
  },
  recipePageTitle: {
    marginTop: 0,
    marginBottom: '3rem',
    color: '#575757',
  },
  twoCol: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& > div': {
      [theme.breakpoints.up('md')]: {
        width: '48%',
        display: 'inline-flex !important',
      },
    },
  },
  threeCol: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& > div': {
      [theme.breakpoints.up('md')]: {
        width: '32%',
        display: 'inline-flex !important',
      },
    },
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  saveButtonContainer: {
    marginTop: 40,
  },
  saveButton: {
    background: theme.palette.primary.secondary,
    boxShadow: `4px 8px 44px ${theme.palette.primary.pale}`,
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
    border: 'none',
    textDecoration: 'none',
    transition: '300ms ease-in-out',
    '&:hover': {
      boxShadow: `2px 4px 22px ${theme.palette.primary.pale}`,
      cursor: 'pointer',
      color: theme.palette.primary.pale,
    },
    '&:disabled': {
      background: '#ddd',
      cursor: 'initial',
    },
  },
}));

export default useStyles;
