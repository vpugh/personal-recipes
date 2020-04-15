import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const [auth, setAuth] = useState({ loading: true, data: null });

  const setAuthData = (data) => {
    setAuth({ data: data });
  };

  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(window.localStorage.getItem('authData')),
    });
  }, []);
  //2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false. This function will be executed every time component is mounted (every time the user refresh the page);

  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);
  // 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.

  return (
    <AuthContext.Provider value={[auth, setAuthData]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
