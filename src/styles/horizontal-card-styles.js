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
  horizontalCard: {
    color: theme.palette.grey.one,
    fontSize: 18,
    borderRadius: 6,
    boxShadow: '2px 4px 8px #FFCCCC',
    background: 'rgb(254, 254, 254)',
    padding: 20,
    transition: '300ms ease-in-out',
    '&:hover': {
      boxShadow: '4px 6px 10px #FFADAD',
    },
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
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
