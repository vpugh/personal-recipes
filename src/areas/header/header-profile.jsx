import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const useStyles = makeStyles((theme) => ({
  userHeaderAvatar: (props) => ({
    height: 35,
    width: 35,
    borderRadius: '50%',
    marginRight: 10,
    backgroundSize: 'cover',
    background: theme.palette.primary.pale,
    backgroundImage: props.user.avatar && `url(/avatar/${props.user.avatar})`,
    justifyContent: !props.user.avatar && 'center',
    display: !props.user.avatar && 'flex',
    alignItems: !props.user.avatar && 'center',
    fontWeight: !props.user.avatar && 'bold',
    color: !props.user.avatar && theme.palette.primary.tertiary,
  }),
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

const HeaderProfile = (props) => {
  const { user, handleLogout } = useAuth();
  const { avatar, username } = user;
  const classes = useStyles(props);
  const history = useHistory();
  const [showSettings, setToggleSettings] = useState(false);

  const logOut = () => {
    toggleSettings();
    handleLogout();
    history.push('/login');
  };

  const toggleSettings = () => {
    setToggleSettings(!showSettings);
  };

  return (
    <>
      <span className={classes.userHeaderAvatar}>
        {!avatar && username.slice(0, 1)}
      </span>
      <p className={classes.userName}>
        Welcome,{' '}
        <span className={classes.userNameLink} onClick={toggleSettings}>
          {username}
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
          <button
            type='button'
            className={classes.settingsLink}
            onClick={logOut}
          >
            Log Out
          </button>
        </ul>
      )}
    </>
  );
};

export default HeaderProfile;
