import React, { useReducer, createContext } from 'react';

const AuthContext = createContext();

const initialState = {
  logginIn: true,
  loggedIn: false,
  loggingOut: false,
  loadingUser: false,
  user: null,
  recipes: null,
  errors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Load User Data
    case 'LOAD_USER_DATA_REQUEST':
      return {
        ...state,
        loadingUser: true,
      };
    case 'LOAD_USER_DATA':
      return {
        ...state,
        user: action.user,
        loadingUser: false,
      };
    case 'LOAD_USER_DATA_FAILURE':
      return {
        ...state,
        loadingUser: false,
      };
    // User Loggin In
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        errors: [],
        user: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        logginIn: false,
        loggedIn: true,
        errors: action.messages || [],
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        errors: action.errors,
        loggingIn: false,
      };
  }
};

const AuthReducer = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthReducer;
