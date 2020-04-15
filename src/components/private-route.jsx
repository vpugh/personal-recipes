import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';
import { UserContext } from '../context/user-context';
import { useEffect } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth] = useContext(AuthContext);
  const [user, setUser] = useContext(UserContext);
  console.log('Private Route', auth, user);
  const { loading } = auth;

  useEffect(() => {
    if (auth && auth.data) {
      fetch(`api/v1/${auth.data}/user`)
        .then((res) => res.json())
        .then((res) => setUser(res.user));
    }
  }, [auth, setUser]);

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading... Test</p>;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth.data ? <Component {...routeProps} /> : <Redirect to='/login' />
      }
    />
  );
  /*  we are spreading routeProps to be able to access this routeProps in the component. */
};

export default PrivateRoute;
