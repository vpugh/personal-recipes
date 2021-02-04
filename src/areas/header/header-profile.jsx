import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import UserAvatar from '../../components/avatar';

const useStyles = makeStyles((theme) => ({
  userHeaderpicture: (props) => ({
    height: 35,
    width: 35,
    borderRadius: '50%',
    marginRight: 10,
    backgroundSize: 'cover',
    background: theme.palette.primary.pale,
    backgroundImage: `url("${UserAvatar(props.user.email)}")`,
  }),
  name: { margin: 0, padding: 0 },
  nameLink: {
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

const HeaderProfile = (props) => {
  const { handleLogout, user, logout } = useAuth();
  const classes = useStyles(props);
  const [showSettings, setToggleSettings] = useState(false);

  const logOut = () => {
    toggleSettings();
    handleLogout();
    logout();
  };

  const toggleSettings = () => {
    setToggleSettings(!showSettings);
  };

  return (
    <>
      <span className={classes.userHeaderpicture} />
      <p className={classes.name}>
        Welcome,{' '}
        <span className={classes.nameLink} onClick={toggleSettings}>
          {user?.username || ''}
        </span>
      </p>
      {showSettings && (
        <ul className={classes.settingMenu}>
          <Link
            to='/user/settings'
            style={{ color: 'inherit' }}
            onClick={toggleSettings}
          >
            Settings
          </Link>
          <div role='button' className={classes.settingsLink} onClick={logOut}>
            Log Out
          </div>
        </ul>
      )}
    </>
  );
};

export default HeaderProfile;
