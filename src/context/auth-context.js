import React, { useContext, createContext } from 'react';
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
    updateRecipes,
  } = useAuthenthentice();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        errors,
        handleLogout,
        handleLogin,
        updateRecipes,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
