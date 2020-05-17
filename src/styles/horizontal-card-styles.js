import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
  },
  subFontSize: {
    fontSize: 10,
  },
  favoriteIconFull: {
    fontSize: 36,
    color: theme.palette.primary.pale,
    // FAACAC
    paddingRight: 10,
    paddingLeft: 30,
    '&:hover': {
      opacity: '.4',
    },
  },
  favoriteIconOutline: {
    fontSize: 36,
    color: theme.palette.primary.pale,
    paddingRight: 10,
    paddingLeft: 30,
    '&:hover': {
      opacity: '.4',
    },
  },
  horizontalCard: {
    color: theme.palette.grey.one,
    fontSize: 18,
    borderRadius: 6,
    boxShadow: `2px 4px 8px ${theme.palette.primary.main}`,
    background: theme.palette.background.white,
    padding: 20,
    transition: '300ms ease-in-out',
    '&:hover': {
      boxShadow: `4px 6px 10px ${theme.palette.primary.secondary}`,
    },
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
    fontWeight: 'normal',
    textDecoration: 'none',
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 6,
    marginLeft: 6,
  },
}));

export default useStyles;
