import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  timeDisplay: {
    [theme.breakpoints.up('md')]: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: 20,
      marginRight: 20,
      borderRight: '1px solid #ddd'
    },
    [theme.breakpoints.down('sm')]: {
      border: '1px solid #ddd',
      padding: 10,
      marginBottom: 10
    }
  },
  timeHeader: {
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: '.75rem',
      margin: 0,
      padding: 0
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      margin: 0
    }
  },
  timeText: {
    [theme.breakpoints.up('md')]: {
      margin: '.5rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      margin: '0 0 0 5px'
    }
  }
}));

export default useStyles;
