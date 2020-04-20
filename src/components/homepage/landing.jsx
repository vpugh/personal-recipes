import React, { useContext } from 'react';
import { AuthContext } from '../../reducer/authReducer';
import LoggedInLanding from './logged-in-landing';
import LoggedOutLanding from './logged-out-landing';

const Landing = () => {
  const [state] = useContext(AuthContext);

  if (state.user) {
    return <LoggedInLanding />;
  }
  return <LoggedOutLanding />;
};

export default Landing;
