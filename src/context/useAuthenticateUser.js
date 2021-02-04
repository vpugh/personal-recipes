import { useState } from 'react';
import { authenticateUser } from '../util/api';
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
    logout,
    getIdTokenClaims,
    getAccessTokenWithPopup,
  } = useAuth0();
  const [errors, setErrors] = useState([]);

  const handleLogout = () => {
    getHandleLogout(setUser);
  };

  const setCurrentUser = (data) => {
    console.log('Set CurrentUser');
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
        JSON.stringify(
          (data.settings[0] && data.settings[0].themes[0].selected) || 'pink'
        )
      );
      setUser(data);
    }
  };

  const updateUser = (data) => {
    setUser(data);
  };

  const handleLogin = async () => {
    const auth = await authenticateUser(auth0User.sub);
    if (!auth) {
      setErrors(auth.error);
      return auth;
    } else {
      const { updated_at, picture, sub } = auth0User;
      setUser({ ...auth, updated_at, picture });
      window.localStorage.setItem('authData', sub);
      window.localStorage.setItem(
        'selectedThemeData',
        (auth.settings[0] && auth.settings[0].themes[0].selected) || 'pink'
      );
      return user;
    }
  };

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
    logout,
    getIdTokenClaims,
    getAccessTokenWithPopup,
    auth0User,
  };
};
