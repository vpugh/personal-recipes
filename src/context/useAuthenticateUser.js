import { useState, useEffect } from 'react';
import { getAuthentication, authenticateUser } from '../util/api';
import { useAuth0 } from '@auth0/auth0-react';

const getHandleLogout = (user) => {
  user(null);
  window.localStorage.removeItem('selectedThemeData');
  window.localStorage.setItem('authData', null);
};

export const useAuthenthentice = () => {
  const [user, setUser] = useState();
  const {
    user: auth0User,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
  } = useAuth0();
  const [errors, setErrors] = useState([]);

  const handleLogout = () => {
    getHandleLogout(setUser);
  };

  const setCurrentUser = (data) => {
    if (data.returnedUser) {
      window.localStorage.setItem(
        'authData',
        JSON.stringify(data.returnedUser.email)
      );
      window.localStorage.setItem(
        'selectedThemeData',
        JSON.stringify(data.returnedUser.settings[0].themes[0].selected)
      );
      setUser(data.returnedUser);
    } else {
      window.localStorage.setItem('authData', JSON.stringify(data.email));
      window.localStorage.setItem(
        'selectedThemeData',
        JSON.stringify(data.settings[0].themes[0].selected)
      );
      setUser(data);
    }
  };

  const updateUser = (data) => {
    setUser(data);
  };

  const handleLogin = async (userData) => {
    const auth = await getAuthentication(userData);
    if (!auth) {
      setErrors(auth.error);
      return auth;
    } else {
      setUser(auth.user);
      window.localStorage.setItem('authData', JSON.stringify(auth.user.email));
      window.localStorage.setItem(
        'selectedThemeData',
        auth.user.settings[0].themes[0].selected
      );
      return auth.user;
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (isAuthenticated) {
        const user = await authenticateUser(auth0User.email);
        const { email, name, nickname, updated_at, picture } = auth0User;
        setUser({ ...user, email, name, nickname, updated_at, picture });
      }
    }
    if (!user) {
      fetchData();
    }
  }, [auth0User, isAuthenticated, user]);

  return {
    user,
    isAuthenticated,
    isLoading,
    handleLogout,
    setCurrentUser,
    handleLogin,
    errors,
    updateUser,
    loginWithRedirect,
  };
};
