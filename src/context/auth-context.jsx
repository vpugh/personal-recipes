import React, { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
