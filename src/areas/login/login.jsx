import React from 'react';
import PageContainer from '../../components/page-container';
// import { useAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';
// import TextInput from '../../components/inputs/text-input';
// import SubmitButton from '../../components/buttons/button';
import { useAuth0 } from '@auth0/auth0-react';

const Login = (props) => {
  const { user, isLoading, loginWithRedirect } = useAuth0();

  return (
    <PageContainer>
      <h1 className='pageTitle'>Login</h1>
      {user && !isLoading && <p>You are already logged in {user.username}</p>}
      {!user && (
        <div>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          <p style={{ paddingTop: 10 }}>
            Don't have an account?{' '}
            <Link
              style={{ display: 'inline-block', color: 'inherit' }}
              to='/signup'
            >
              Signup
            </Link>
          </p>
        </div>
      )}
    </PageContainer>
  );
};

export default Login;
