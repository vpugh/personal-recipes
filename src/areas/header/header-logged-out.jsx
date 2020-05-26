import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLoggedOut = (props) => {
  return (
    <>
      <Link style={{ marginRight: 10, color: 'inherit' }} to='/login'>
        Login
      </Link>
      <br />
      <Link style={{ color: 'inherit' }} to='/signup'>
        Signup
      </Link>
    </>
  );
};

export default HeaderLoggedOut;
