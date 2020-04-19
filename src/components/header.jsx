import React, { useContext, useState } from 'react';
import { useStyles } from '../styles/header-styles';
import Container from '../grid/container';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../context/user-context';
import { AuthContext } from '../context/auth-context';

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [, setAuthData] = useContext(AuthContext);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const toggleSettings = () => {
    setShowSettingsMenu(!showSettingsMenu);
  };

  const handleLogout = () => {
    setAuthData(null);
    setUser(null);
    toggleSettings();
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
            {user && (
              <>
                {user.avatar && (
                  <span
                    style={{ backgroundImage: `url(/avatar/${user.avatar})` }}
                    className={classes.userHeaderAvatar}
                  />
                )}
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
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </ul>
                )}
              </>
            )}
            {!user && (
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
