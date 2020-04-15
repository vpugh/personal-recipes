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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {user && (
              <>
                <p style={{ margin: 0, padding: 0 }}>
                  Welcome, <strong>{user.username}</strong>
                </p>
                <button
                  // onClick={() => alert('Drop down settings, logout')}
                  onClick={toggleSettings}
                  className={`${classes.settingsButton} ${classes.hoverLink}`}
                >
                  <img
                    src='/icons/Gear@2x.png'
                    alt='Settings Icon'
                    className={classes.iconSize}
                  />
                </button>
                {showSettingsMenu && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: 40,
                      right: 30,
                      background: 'white',
                      padding: '30px 40px',
                      borderRadius: 4,
                    }}
                  >
                    <Link
                      to='/user/profile'
                      style={{ color: 'inherit' }}
                      onClick={toggleSettings}
                    >
                      Profile
                    </Link>
                    <button
                      type='button'
                      style={{
                        textDecoration: 'underline',
                        display: 'block',
                        border: 'none',
                        fontSize: 18,
                        textAlign: 'left',
                        padding: 0,
                        marginTop: 8,
                      }}
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
