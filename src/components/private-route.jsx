import React from 'react';
import { useAuth } from '../context/auth-context';
import { Route, Redirect } from 'react-router-dom';
import PageContainer from './page-container';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <PageContainer>Loading...</PageContainer>;
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
