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
  }
}));

export default useStyles;
