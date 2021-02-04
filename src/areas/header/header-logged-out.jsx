import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const HeaderLoggedOut = () => {
  const { loginWithRedirect } = useAuth();
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
