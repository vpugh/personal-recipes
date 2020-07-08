import React from 'react';
import Container from '../../grid/container';
import { Link } from 'react-router-dom';
import { useStyles } from '../../styles/header-styles';
import { useAuth } from '../../context/auth-context';
import { useAuth0 } from '@auth0/auth0-react';
import HeaderProfile from './header-profile';
import HeaderLoggedOut from './header-logged-out';
import { useEffect } from 'react';

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
      if (claims) {
        localStorage.setItem('token', claims.__raw);
        handleLogin(user.email);
      }
    };

    if (user && !hasuraUser) {
      getToken();
    }
  }, [
    getIdTokenClaims,
    user,
    handleLogin,
    hasuraUser,
    getAccessTokenWithPopup,
  ]);

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
