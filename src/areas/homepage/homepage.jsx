import React from 'react';
// import { useAuth } from '../../context/auth-context';
import { useAuth0 } from '@auth0/auth0-react';
import LoggedOut from './logged-out';
import LoggedIn from './logged-in';

const Homepage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Homepage;
