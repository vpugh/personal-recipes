import React, { useContext, createContext, useMemo } from 'react';
import { useAuthenthentice } from './useAuthenticateUser';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const {
    user,
    isAuthenticated,
    isLoading,
    handleLogout,
    handleLogin,
    errors,
    updateUser,
    logout,
    loginWithRedirect,
    getIdTokenClaims,
    getAccessTokenWithPopup,
    auth0User,
  } = useAuthenthentice();

  const value = useMemo(() => {
    return {
      isAuthenticated,
      user,
      isLoading,
      errors,
      handleLogout,
      handleLogin,
      updateUser,
      logout,
      loginWithRedirect,
      getIdTokenClaims,
      getAccessTokenWithPopup,
      auth0User,
    };
  }, [
    errors,
    handleLogin,
    handleLogout,
    isAuthenticated,
    isLoading,
    updateUser,
    user,
    logout,
    loginWithRedirect,
    getIdTokenClaims,
    getAccessTokenWithPopup,
    auth0User,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
