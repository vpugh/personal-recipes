import React, { useState, createContext, useContext, useEffect } from 'react';
import { AuthContext } from './auth-context';

const UserContext = createContext(() => [{}, () => []]);

const UserProvider = (props) => {
  const { children } = props;
  const [auth] = useContext(AuthContext);
  const [user, setUser] = useState();

  useEffect(() => {
    if (auth && !auth.loading && auth.data) {
      // fetch(`api/v1/${auth.data}/user`)
      fetch('api/v1/user/authenticate', {
        method: 'POST',
        body: { email: auth.data },
      })
        .then((res) => res.json())
        .then((res) => setUser(res.user));
    }
  }, [auth]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
