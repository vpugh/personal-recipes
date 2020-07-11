import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const HeaderLoggedOut = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Link
        style={{ marginRight: 10, color: 'inherit' }}
        onClick={() => loginWithRedirect()}
        to=''
      >
        Login/Signup
      </Link>
    </>
  );
};

export default HeaderLoggedOut;
