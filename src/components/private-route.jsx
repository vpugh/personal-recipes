import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth] = useContext(AuthContext);

  const { loading } = auth;

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
};

export default PrivateRoute;
