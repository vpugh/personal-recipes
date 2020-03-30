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
  twoCol: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '& div': {
      [theme.breakpoints.up('md')]: {
        width: '48%',
        display: 'inline-flex !important'
      }
    }
  },
  threeCol: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '& div': {
      [theme.breakpoints.up('md')]: {
        width: '32%',
        display: 'inline-flex !important'
      }
    }
  },
  saveButton: {
    background: '#FF8585',
    boxShadow: ' 4px 8px 44px #FFCCCC',
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
    textDecoration: 'none'
  }
}));

export default useStyles;
