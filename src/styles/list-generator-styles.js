import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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
  }
}));

export default useStyles;
