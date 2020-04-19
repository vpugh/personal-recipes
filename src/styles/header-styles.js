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
  userHeaderAvatar: {
    display: 'inline-block',
    height: 45,
    width: 45,
    borderRadius: '50%',
    marginRight: 10,
    backgroundSize: 'cover',
  },
  userName: { margin: 0, padding: 0 },
  userNameLink: {
    fontWeight: 'bold',
    '&:hover': { cursor: 'pointer', textDecoration: 'underline' },
  },
  profileDDContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  settingMenu: {
    position: 'absolute',
    top: 20,
    right: 0,
    background: 'white',
    padding: '20px',
    borderRadius: 4,
    boxShadow: '2px 2px 20px rgba(0, 0, 0, .2)',
  },
  settingsLink: {
    textDecoration: 'underline',
    display: 'block',
    border: 'none',
    fontSize: 18,
    textAlign: 'left',
    padding: 0,
    marginTop: 8,
  },
}));

export default useStyles;
