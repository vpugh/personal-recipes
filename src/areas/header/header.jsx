import React, { useEffect } from 'react';
import Container from '../../grid/container';
import { Link } from 'react-router-dom';
import { useStyles } from '../../styles/header-styles';
import { useAuth } from '../../context/auth-context';
import HeaderProfile from './header-profile';
import HeaderLoggedOut from './header-logged-out';

const Header = () => {
  const classes = useStyles();
  const {
    user,
    handleLogin,
    getIdTokenClaims,
    getAccessTokenWithPopup,
  } = useAuth();

  useEffect(() => {
    const getToken = async () => {
      const claims = await getIdTokenClaims();
      if (claims) {
        localStorage.setItem('token', claims.__raw);
        handleLogin();
      }
    };

    if (!user) {
      getToken();
    }
  }, [getIdTokenClaims, user, handleLogin, getAccessTokenWithPopup]);

  return (
    <header className={classes.headerBackground}>
      <Container className={classes.container}>
        <Link className={`logo serif ${classes.logoLink}`} to='/'>
          Personal Recipes
        </Link>
        <div className='profile'>
          <div className={classes.profileDDContainer}>
            {user ? <HeaderProfile user={user} /> : <HeaderLoggedOut />}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
