import React, { useState, useContext } from 'react';
import CardContainer from './shared/card-container';
import TextInput from '../components/inputs/text-inputs';
import { UserContext } from '../context/user-context';
import { AuthContext } from '../context/auth-context';
import { Link } from 'react-router-dom';
import { getAuthentication } from '../util/api';

const buttonStyle = {
  background: '#FF8585',
  boxShadow: ' 4px 8px 44px #FFCCCC',
  width: '100%',
  fontSize: 16,
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  paddingTop: 16,
  paddingBottom: 16,
  border: 'none',
  textDecoration: 'none',
  marginTop: 40,
};

const Login = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [, setAuthData] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinResponse, setSigninResponse] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const auth = await getAuthentication(userData);
    if (auth.error) {
      setSigninResponse(auth.error);
    } else {
      setUser(auth.user);
      setAuthData(auth.user.email);
      props.history.push('/');
    }
  };

  return (
    <CardContainer>
      <h1 className='cardTitle'>Login</h1>
      {user && <p>You are already logged in {user.username}</p>}
      {!user && (
        <form onSubmit={handleOnSubmit}>
          <TextInput
            labelTitle='Email'
            placeholder='Where to send stuff'
            required={true}
            value={email}
            setFunction={setEmail}
          />
          <TextInput
            labelTitle='Password'
            placeholder='To get into your account'
            required={true}
            value={password}
            setFunction={setPassword}
            type='password'
          />
          <button type='submit' style={buttonStyle}>
            Login to your account
          </button>
          <p style={{ paddingTop: 10 }}>
            Don't have an account?{' '}
            <Link style={{ display: 'inline-block' }} to='/signup'>
              Signup
            </Link>
          </p>
        </form>
      )}
      {signinResponse && <p>{signinResponse}</p>}
    </CardContainer>
  );
};

export default Login;
