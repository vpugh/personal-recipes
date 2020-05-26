import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  pageContainer: (props) => ({
    maxWidth: 850,
    background: theme.palette.background.white,
    boxShadow: '4px 8px 44px #FFCCCC',
    padding: 30,
    [theme.breakpoints.up('md')]: {
      padding: props.padding || '40px 50px',
    },
    margin: '0 auto 72px auto',
    fontSize: 18,
    color: '#575757',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
    '& .pageTitle': {
      marginTop: 0,
      marginBottom: '3rem',
    },
  }),
}));

export default useStyles;
