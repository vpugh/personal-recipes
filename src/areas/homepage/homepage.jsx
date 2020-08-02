import React from 'react';
import { useAuth } from '../../context/auth-context';
import LoggedOut from './logged-out';
import LoggedIn from './logged-in';
import { newUserCreateSettings } from '../../util/api';

const Homepage = () => {
  const { isAuthenticated, user } = useAuth();

  if (user && user.settings && user.settings.length === 0) {
    console.log('No Settings, set them', user, user.key, user.user_id);
    newUserCreateSettings(user.key, user.user_id);
  }

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Homepage;
