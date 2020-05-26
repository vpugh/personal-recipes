import React from 'react';
import { useAuth } from '../../context/auth-context';
import LoggedOut from './logged-out';
import LoggedIn from './logged-in';

const Homepage = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Homepage;
