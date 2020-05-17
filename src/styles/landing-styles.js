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
    background: theme.palette.primary.secondary,
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

    transition: '300ms ease-in-out',
    '&:hover': {
      boxShadow: `4px 6px 10px ${theme.palette.primary.main}`,
    },
  },
  introBox: {
    boxShadow: `4px 8px 16px ${theme.palette.primary.pale}`,
    margin: '0 0 40px 0',
    [theme.breakpoints.up('md')]: {
      margin: '40px 0 60px 0',
    },
    '& > .text-container': {
      padding: 20,
      '& > p': {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        color: '#575757',
      },
      '& > div': {
        [theme.breakpoints.up('md')]: {
          width: '60%',
          margin: '0 auto',
        },
      },
    },
  },
  root: {
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#000',
    },
    '& .MuiFormControl-fullWidth': {
      background: theme.palette.background.main,
    },
  },
}));

export default useStyles;
