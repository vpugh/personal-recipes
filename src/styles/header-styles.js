import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  headerBackground: {
    padding: '23px 40px',
  },
  hoverLink: {
    '&:hover': { cursor: 'pointer', opacity: '0.5' },
  },
  logoLink: {
    fontSize: 28,
    transition: '300ms ease-in-out',
    '&:hover': { cursor: 'pointer', opacity: '0.5' },
  },
  searchButton: {
    marginRight: 30,
    border: 'none',
    padding: 0,
    background: 'transparent',
    transition: '300ms ease-in-out',
  },
  settingsButton: {
    marginLeft: 10,
    border: 'none',
    padding: 0,
    background: 'transparent',
    transition: '300ms ease-in-out',
  },
  iconSize: {
    width: 24,
    height: 24,
  },
}));

export default useStyles;
