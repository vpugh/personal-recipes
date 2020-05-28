import React, { useState } from 'react';
import PageContainer from '../../components/page-container';
import { useAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';
import TextInput from '../../components/inputs/text-input';
import Button from '../../components/buttons/button';

const errorAlert = {
  color: '#ff4e4e',
  fontSize: '1.2rem',
  marginBottom: 0,
  background: '#fef2f3',
  padding: '8px 16px',
  borderRadius: 4,
  border: '1px solid #ff4e4e',
  fontWeight: 'bold',
};

const Login = (props) => {
  const { user, loading, handleLogin } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginResponse, setLoginResponse] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const res = await handleLogin(userData);
    if (res.error) {
      setLoginResponse(res.error);
    } else {
      props.history.push('/');
    }
  };

  return (
    <PageContainer>
      <h1 className='pageTitle'>Login</h1>
      {user && !loading && <p>You are already logged in {user.username}</p>}
      {!user && (
        <form onSubmit={handleOnSubmit}>
          <TextInput
            label='Email'
            placeholder="How you'll login"
            required={true}
            value={email}
            setFunc={setEmail}
          />
          <TextInput
            label='Password'
            placeholder='Something to access your account'
            required={true}
            value={password}
            setFunc={setPassword}
            type='password'
          />
          <Button fullSize color>
            Login to your account
          </Button>
          <p style={{ paddingTop: 10 }}>
            Don't have an account?{' '}
            <Link
              style={{ display: 'inline-block', color: 'inherit' }}
              to='/signup'
            >
              Signup
            </Link>
          </p>
        </form>
      )}
      {loginResponse && <p style={errorAlert}>{loginResponse}</p>}
    </PageContainer>
  );
};

export default Login;
