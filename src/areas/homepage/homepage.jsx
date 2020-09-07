import React from 'react';
import { useAuth } from '../../context/auth-context';
import LoggedOut from './logged-out';
import LoggedIn from './logged-in';
import { newUserCreateSettings } from '../../util/api';

const createNewSettings = async (key, userId, email, updateUser) => {
  const data = await newUserCreateSettings(key, userId, email);
  updateUser(data[0]);
};

const Homepage = () => {
  const { isAuthenticated, user, updateUser } = useAuth();

  if (user && user.settings && user.settings.length === 0) {
    createNewSettings(user.key, user.user_id, user.email, updateUser);
  }

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Homepage;
