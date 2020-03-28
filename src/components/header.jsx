import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '../grid/container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  headerBackground: {
    // background: '#fff',
    padding: '23px 40px'
  },
  hoverLink: {
    '&:hover': { cursor: 'pointer', opacity: '0.5' }
  },
  logoLink: {
    fontSize: 28,
    transition: '300ms ease-in-out',
    '&:hover': { cursor: 'pointer', opacity: '0.5' }
  },
  searchButton: {
    marginRight: 30,
    border: 'none',
    padding: 0,
    background: 'transparent',
    transition: '300ms ease-in-out'
  },
  settingsButton: {
    marginLeft: 10,
    border: 'none',
    padding: 0,
    background: 'transparent',
    transition: '300ms ease-in-out'
  },
  iconSize: {
    width: 24,
    height: 24
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.headerBackground}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 18
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
            <p style={{ margin: 0, padding: 0 }}>
              Welcome, <strong>Rose</strong>
            </p>
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
