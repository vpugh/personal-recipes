import React, { useEffect } from 'react';
import Container from '../../grid/container';
import { Link } from 'react-router-dom';
import { useStyles } from '../../styles/header-styles';
import { useAuth } from '../../context/auth-context';
import { useAuth0 } from '@auth0/auth0-react';
import HeaderProfile from './header-profile';
import HeaderLoggedOut from './header-logged-out';

const Header = () => {
  const classes = useStyles();
  const { user: hasuraUser, handleLogin } = useAuth();
  const {
    user,
    isLoading,
    getIdTokenClaims,
    getAccessTokenWithPopup,
  } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      const claims = await getIdTokenClaims();
      const setToken = localStorage.getItem('token');
      if (claims && claims.__raw !== setToken) {
        localStorage.setItem('token', claims.__raw);
        handleLogin(user.email);
      }
    };

    getToken();
  }, [getIdTokenClaims, user, handleLogin, getAccessTokenWithPopup]);

  return (
    <header className={classes.headerBackground}>
      <Container className={classes.container}>
        <Link className={`logo serif ${classes.logoLink}`} to='/'>
          Personal Recipes
        </Link>
        <div className='profile'>
          <div className={classes.profileDDContainer}>
            {!isLoading && hasuraUser ? (
              <HeaderProfile user={user} />
            ) : (
              <HeaderLoggedOut />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
