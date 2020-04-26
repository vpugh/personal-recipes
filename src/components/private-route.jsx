import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/new-auth-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated } = useAuth();

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
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
