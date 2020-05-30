import { useState, useEffect } from 'react';
import { getAuthentication, authenticateUser } from '../util/api';

const checkAuthentication = () => {
  return JSON.parse(window.localStorage.getItem('authData'));
};

const getHandleLogout = (authenticated, user) => {
  authenticated(false);
  user(null);
  window.localStorage.removeItem('selectedThemeData');
  window.localStorage.setItem('authData', null);
};

export const useAuthenthentice = () => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const handleLogout = () => {
    getHandleLogout(setIsAuthenticated, setUser);
  };

  const setCurrentUser = (data) => {
    window.localStorage.setItem('authData', JSON.stringify(data.email));
    window.localStorage.setItem(
      'selectedThemeData',
      JSON.stringify(data.settings[0].themes.selected)
    );
    setUser(data);
    setIsAuthenticated(data.email);
  };

  const updateUser = (data) => {
    setLoading(true);
    setUser(data);
    setLoading(false);
  };

  const updateRecipes = (data) => {
    console.log('Update Recipe', data);
    // setRecipes(data);
  };

  const handleLogin = async (userData) => {
    const auth = await getAuthentication(userData);
    if (auth.error) {
      setErrors(auth.error);
      return auth;
    } else {
      setUser(auth.user);
      window.localStorage.setItem('authData', JSON.stringify(auth.user.email));
      window.localStorage.setItem(
        'selectedThemeData',
        auth.user.setting[0].themes[0].selected
      );
      setIsAuthenticated(auth.user.email);
      return auth;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const isAuthenticated = await checkAuthentication();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await authenticateUser(isAuthenticated);
        setUser(user.user);
      }
      setLoading(false);
    }
    if (!user) {
      fetchData();
    }
  }, [user]);

  return {
    user,
    isAuthenticated,
    loading,
    handleLogout,
    setCurrentUser,
    handleLogin,
    errors,
    updateRecipes,
    updateUser,
  };
};
