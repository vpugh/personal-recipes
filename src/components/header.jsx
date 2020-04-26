import React, { useState } from 'react';
import { useStyles } from '../styles/header-styles';
import Container from '../grid/container';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/new-auth-context';

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated, user, loading, handleLogout } = useAuth();
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const toggleSettings = () => {
    setShowSettingsMenu(!showSettingsMenu);
  };

  const logOut = () => {
    toggleSettings();
    handleLogout();
    history.push('/login');
  };

  return (
    <header className={classes.headerBackground}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 18,
        }}
      >
        <div className={`logo serif ${classes.logoLink}`}>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/'>
            Personal Recipes
          </Link>
        </div>
        <div className='searchbar'>
          <button
            onClick={() => alert('Search function coming')}
            className={`${classes.searchButton} ${classes.hoverLink}`}
          >
            <img
              src='/icons/Magnifying_Glass@2x.png'
              alt='Settings Icon'
              className={classes.iconSize}
            />
          </button>
        </div>
        <div className='profile'>
          <div className={classes.profileDDContainer}>
            {isAuthenticated && !loading && (
              <>
                <span
                  style={{
                    backgroundImage: user.avatar
                      ? `url(/avatar/${user.avatar})`
                      : null,
                    justifyContent: !user.avatar ? 'center' : null,
                    display: !user.avatar ? 'flex' : null,
                    alignItems: !user.avatar ? 'center' : null,
                    fontWeight: !user.avatar ? 'bold' : null,
                    color: !user.avatar ? '#6b0606' : null,
                  }}
                  className={classes.userHeaderAvatar}
                >
                  {!user.avatar && user.username.slice(0, 1)}
                </span>
                <p className={classes.userName}>
                  Welcome,{' '}
                  <span
                    className={classes.userNameLink}
                    onClick={toggleSettings}
                  >
                    {user.username}
                  </span>
                </p>
                {showSettingsMenu && (
                  <ul className={classes.settingMenu}>
                    <Link
                      to='/user/profile'
                      style={{ color: 'inherit' }}
                      onClick={toggleSettings}
                    >
                      Profile
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
            )}
            {!isAuthenticated && !loading && (
              <>
                <Link style={{ marginRight: 10, color: 'inherit' }} to='/login'>
                  Login
                </Link>
                <br />
                <Link style={{ color: 'inherit' }} to='/signup'>
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
