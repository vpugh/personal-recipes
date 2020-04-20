import React, { useReducer, createContext, useEffect } from 'react';

export const AuthContext = createContext();

const initialState = {
  loggingIn: true,
  loggedIn: false,
  loggingOut: false,
  loadingUser: false,
  user: null,
  loadingRecipe: false,
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
    case 'LOAD_USER_DATA_SUCCESS':
      return {
        ...state,
        user: action.user,
        errors: action.messages || [],
        loadingUser: false,
      };
    case 'LOAD_USER_DATA_FAILURE':
      return {
        ...state,
        errors: action.errors,
        loadingUser: false,
      };
    // Load Recipe Data
    case 'LOAD_RECIPE_DATA_REQUEST':
      return {
        ...state,
        loadingRecipe: true,
      };
    case 'LOAD_RECIPE_DATA_SUCCESS':
      return {
        ...state,
        RECIPE: action.recipe,
        errors: action.messages || [],
        loadingRecipe: false,
      };
    case 'LOAD_RECIPE_DATA_FAILURE':
      return {
        ...state,
        errors: action.errors,
        loadingRecipe: false,
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

const authData = JSON.parse(window.localStorage.getItem('authData'));

const getData = (context) => {
  fetch('/api/v1/user/authenticate', {
    method: 'POST',
    body: { email: authData },
  })
    .then((res) => res.json())
    .then((res) => {
      context({ type: 'LOGIN_SUCCESS', messages: res.error });
      context({ type: 'LOAD_USER_DATA_REQUEST' });
      context({ type: 'LOAD_USER_DATA_SUCCESS', user: res.user });
    });
};

const AuthReducer = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  useEffect(() => {
    if (authData) {
      getData(contextValue[1]);
    }
  }, []);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthReducer;