import { useState, useCallback, useEffect } from 'react';
import { authenticateUser } from '../util/api';
import { useAuth0 } from '@auth0/auth0-react';

// const getHandleLogout = (user) => {
//   user(null);
//   window.localStorage.removeItem('selectedThemeData');
//   window.localStorage.setItem('authData', null);
// };

export const useAuthenthentice = () => {
  const [user, setUser] = useState();
  const {
    user: auth0User,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();
  console.log('Users', user, auth0User);
  const [errors, setErrors] = useState([]);
  useEffect(() => {}, []);

  // const mergeUser = useCallback(
  //   (user) => {
  //     const { updated_at, picture } = auth0User;
  //     return { ...user, updated_at, picture };
  //   },
  //   [auth0User]
  // );

  // const handleLogout = () => {
  //   getHandleLogout(setUser);
  // };

  // const setCurrentUser = (data) => {
  //   console.log('Set CurrentUser');
  //   if (data.returnedUser) {
  //     window.localStorage.setItem(
  //       'authData',
  //       JSON.stringify(data.returnedUser.email)
  //     );
  //     window.localStorage.setItem(
  //       'selectedThemeData',
  //       JSON.stringify(data.returnedUser.settings[0].themes[0].selected)
  //     );
  //     setUser(data.returnedUser);
  //   } else {
  //     window.localStorage.setItem('authData', JSON.stringify(data.email));
  //     window.localStorage.setItem(
  //       'selectedThemeData',
  //       JSON.stringify(
  //         (data.settings[0] && data.settings[0].themes[0].selected) || 'pink'
  //       )
  //     );
  //     setUser(data);
  //   }
  // };

  // const updateUser = (data) => {
  //   setUser(data);
  // };

  const handleLogin = async (email) => {
    const auth = await authenticateUser(email);
    console.log('Handle Login', auth);
    if (!auth) {
      setErrors(auth.error);
      return auth;
    } else {
      const { updated_at, picture } = auth0User;
      setUser({ ...auth, updated_at, picture });
      // window.localStorage.setItem('authData', JSON.stringify(auth.email));
      window.localStorage.setItem(
        'selectedThemeData',
        (auth.settings[0] && auth.settings[0].themes[0].selected) || 'pink'
      );
      // return user;
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    handleLogout: () => console.log('Logout'),
    setCurrentUser: () => console.log('Set Current USer'),
    handleLogin,
    errors,
    updateUser: () => console.log('Update User'),
    loginWithRedirect,
    logout,
  };
};
