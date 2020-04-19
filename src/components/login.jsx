import React, { useState, useContext } from 'react';
import CardContainer from './shared/card-container';
import TextInput from '../components/inputs/text-inputs';
import { AuthContext } from '../reducer/authReducer';
import { Link } from 'react-router-dom';

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
  const [state, dispatch] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinResponse, setSigninResponse] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch({ type: 'LOGIN_REQUEST' });
    fetch('/api/v1/authentication', {
      method: 'POST',
      body: userData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          dispatch({ type: 'LOGIN_FAILURE', errors: res.error });
          setSigninResponse(res.error);
        } else {
          dispatch({ type: 'LOGIN_SUCCESS', messages: res.error });
          window.localStorage.setItem(
            'authData',
            JSON.stringify(res.user.email)
          );
          dispatch({ type: 'LOAD_USER_DATA_REQUEST' });
          dispatch({ type: 'LOAD_USER_DATA', user: res.user });
          dispatch({ type: 'LOAD_USER_DATA_SUCCESS' });
          props.history.push('/');
        }
      });
  };

  console.log('Check AuthReducer', state);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Login</h1>
      {state.user && <p>You are already logged in {state.user.username}</p>}
      {!state.user && (
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
