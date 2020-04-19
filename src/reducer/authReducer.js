import React, { useReducer, createContext, useEffect } from 'react';

export const AuthContext = createContext();

const initialState = {
  loggingIn: true,
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
    case 'LOAD_USER_DATA_SUCCESS':
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
        loggingIn: false,
        loggedIn: true,
        errors: action.messages || [],
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        errors: action.errors,
        loggingIn: false,
      };
    // User Loggin Out
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loggingOut: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loggingOut: false,
        loggedIn: false,
        user: null,
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        errors: action.errors,
        loggingOut: false,
      };
    default:
      return {
        ...state,
      };
  }
};

const AuthReducer = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  const authData = JSON.parse(window.localStorage.getItem('authData'));
  useEffect(() => {
    console.log('Check AuthData', authData, window.localStorage);
    if (authData) {
      console.log('Check Token');
      fetch('/api/v1/user/authenticate', {
        method: 'POST',
        body: { email: authData },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.user);
          // reducer({ type: 'LOGIN_SUCCESS', messages: res.error });
          // reducer({ type: 'LOAD_USER_DATA_REQUEST' });
          // reducer({ type: 'LOAD_USER_DATA', user: res.user });
          // reducer({ type: 'LOAD_USER_DATA_SUCCESS' });
        });
    }
  }, [authData]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthReducer;
