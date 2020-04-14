import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import LoggedInLanding from './logged-in-landing';
import LoggedOutLanding from './logged-out-landing';

const Landing = () => {
  const [user] = useContext(UserContext);

  if (user) {
    return <LoggedInLanding />;
  }
  return <LoggedOutLanding />;
};

export default Landing;
