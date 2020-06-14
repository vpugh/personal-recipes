import React, { useContext, createContext, useMemo } from 'react';
import { useAuthenthentice } from './useAuthenticateUser';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const {
    user,
    isAuthenticated,
    loading,
    handleLogout,
    setCurrentUser,
    handleLogin,
    errors,
    updateUser,
  } = useAuthenthentice();

  const value = useMemo(() => {
    return {
      isAuthenticated,
      user,
      loading,
      errors,
      handleLogout,
      handleLogin,
      setCurrentUser,
      updateUser,
    };
  }, [
    errors,
    handleLogin,
    handleLogout,
    isAuthenticated,
    loading,
    setCurrentUser,
    updateUser,
    user,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
