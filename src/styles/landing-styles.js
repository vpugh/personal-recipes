import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: '0 auto',
      width: '70%',
      maxWidth: 960,
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
  // style={{
  //   color: 'rgb(87, 87, 87)',
  //   borderRadius: 6,
  //   fontSize: 18,
  //   boxShadow: 'rgb(255, 204, 204) 4px 8px 44px',
  //   background: 'rgb(254, 254, 254)',
  //   padding: 20,
  //   margin: '40px 0',
  // }}
  addNewButton: {
    background: theme.palette.primary.secondary,
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
    margin: '40px 0 60px 0',
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
