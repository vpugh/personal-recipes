import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  padding: {
    margin: '54px auto 0 auto',
    padding: '0 10px',
    [theme.breakpoints.up('md')]: {
      padding: '0 60px',
    },
  },
}));

export default useStyles;
