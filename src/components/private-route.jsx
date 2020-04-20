import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../reducer/authReducer';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(AuthContext);

  if (state.loggingIn) {
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
        state.loggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
