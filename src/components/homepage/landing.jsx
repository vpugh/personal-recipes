import React from 'react';
import LoggedInLanding from './logged-in-landing';
import LoggedOutLanding from './logged-out-landing';
import { useAuth } from '../../context/new-auth-context';

const Landing = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <LoggedInLanding /> : <LoggedOutLanding />;
};

export default Landing;
