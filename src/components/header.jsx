import React, { useContext } from 'react';
import { useStyles } from '../styles/header-styles';
import Container from '../grid/container';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user-context';

const Header = () => {
  const classes = useStyles();
  const [user] = useContext(UserContext);

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
              <p style={{ margin: 0, padding: 0 }}>
                Welcome, <strong>{user.username}</strong>
              </p>
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
            <button
              onClick={() => alert('Drop down settings, logout')}
              className={`${classes.settingsButton} ${classes.hoverLink}`}
            >
              <img
                src='/icons/Gear@2x.png'
                alt='Settings Icon'
                className={classes.iconSize}
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
