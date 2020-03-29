import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    fontSize: 18,
    background: '#FEFEFE',
    padding: '40px 50px',
    boxShadow: '4px 8px 44px #FFCCCC',
    maxWidth: 972,
    margin: '0 auto 72px auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  },
  threeCol: {
    display: 'flex',
    justifyContent: 'space-between',
    '& div': {
      width: '32%',
      display: 'inline-flex !important'
    }
  }
}));

export default useStyles;
