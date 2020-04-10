import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px',
    },
    fontSize: 18,
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#F65B5B',
    fontWeight: 'normal',
    marginTop: 0,
  },
  h3Title: {
    fontWeight: 'normal',
    margin: 0,
    fontSize: 18,
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  subFontSize: {
    fontSize: 10,
  },
  addNewButton: {
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
    textDecoration: 'none',
    marginTop: 40,
  },
  imageCardContainer: {},
  widgetContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: '0px auto 72px',
      maxWidth: 650,
    },
  },
}));

export default useStyles;
