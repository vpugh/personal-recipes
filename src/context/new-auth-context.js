import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  getAuthentication,
  authenticateUser,
  getUserRecipes,
} from '../util/api';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const checkAuthentication = () => {
    return JSON.parse(window.localStorage.getItem('authData'));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setRecipes(null);
    window.localStorage.setItem('authData', null);
  };

  const updateRecipes = (data) => {
    setRecipes(data);
  };

  const setCurrentUser = (data) => {
    setUser(data);
    setIsAuthenticated(data.email);
    setRecipes([]);
  };

  const handleLogin = async (userData) => {
    const auth = await getAuthentication(userData);
    if (auth.error) {
      setErrors(auth.error);
      return auth;
    } else {
      setUser(auth.user);
      const recipes = await getUserRecipes(auth.user.id);
      setRecipes(recipes);
      window.localStorage.setItem('authData', JSON.stringify(auth.user.email));
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
        const recipes = await getUserRecipes(user.user.id);
        setUser(user.user);
        setRecipes(recipes);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        recipes,
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
