import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  recipeContainer: {
    background: '#FEFEFE',
    boxShadow: '4px 8px 44px #FFCCCC',
    padding: '40px 50px',
    color: '#575757',
    margin: '0 auto 72px auto',
    maxWidth: 660,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  },
  recipeTitle: {
    margin: 0
  },
  recipeOrigin: {
    borderTop: '1px solid #efefef',
    borderBottom: '1px solid #efefef',
    padding: '13px 0',
    marginTop: 20,
    fontSize: '0.8rem'
  },
  recipeDescription: {
    paddingTop: '1rem',
    paddingBottom: '.5rem'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  listUl: {
    margin: 0,
    padding: 0
  },
  listSubtitle: {
    marginBottom: '.75rem',
    fontWeight: 600
  },
  listLi: {
    marginLeft: '1rem',
    paddingBottom: '.75rem'
  },
  listUlTwoCol: {
    margin: 0,
    padding: 0,
    [theme.breakpoints.up('md')]: {
      width: '48%'
    }
  },
  listFlex: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
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
