import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    fontSize: 18,
    background: '#FEFEFE',
    padding: '30px 20px',
    boxShadow: '4px 8px 44px #FFCCCC',
    maxWidth: 650,
    margin: '0 auto 72px auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  }
}));

export default useStyles;
