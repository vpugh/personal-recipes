import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      margin: '20px 16px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: '0 auto',
      width: '70%',
      maxWidth: 960,
    },
    fontSize: 18,
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: '22px',
    color: theme.palette.primary.tertiary,
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
  introBox: {
    background: theme.palette.primary.secondary,
    boxShadow: `0 2px 4px 0 ${theme.palette.primary.pale}`,
    borderRadius: '6px 6px 0 0',
    margin: '0 0 40px 0',
    padding: '114px 0',
    [theme.breakpoints.up('md')]: {
      margin: '0 0 60px 0',
    },
    '& > .text-container': {
      padding: 20,
      width: '50%',
      margin: '0 auto',
      '& > p': {
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 0,
        color: theme.palette.primary.dark,
        letterSpacing: '-0.6px',
        [theme.breakpoints.up('md')]: {
          fontSize: 36,
        },
      },
      '& > div': {
        [theme.breakpoints.up('md')]: {
          margin: '0 auto',
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
}));

export default useStyles;
