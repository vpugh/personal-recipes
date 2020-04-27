import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  subFontSize: {
    fontSize: 10,
  },
  horizontalCard: {
    color: 'rgb(87, 87, 87)',
    fontSize: 18,
    borderRadius: 6,
    boxShadow: 'rgb(255, 204, 204) 4px 8px 44px',
    background: 'rgb(254, 254, 254)',
    padding: 20,
    '&:last-child': {
      marginRight: 0,
    },
    // width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 20px 0 0',
      width: '25%',
    },
    '& > .card-title a': {
      color: 'inherit',
      fontWeight: 'normal',
      // textDecoration: 'none',
    },
  },
}));

export default useStyles;
