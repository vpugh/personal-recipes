import React, { useState, createContext, useEffect, useContext } from 'react';
import { UserContext } from './user-context';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const [, setUser] = useContext(UserContext);
  const [auth, setAuth] = useState({ loading: true, data: null });

  const setAuthData = (data) => {
    setAuth({ data: data });
  };

  useEffect(() => {
    const authData = JSON.parse(window.localStorage.getItem('authData'));
    if (authData) {
      fetch('/api/v1/user/authenticate', {
        method: 'POST',
        body: { email: authData },
      })
        .then((res) => res.json())
        .then((res) => setUser(res.user));
    }
    setAuth({
      loading: false,
      data: authData,
    });
  }, [setUser]);

  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    <AuthContext.Provider value={[auth, setAuthData]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
