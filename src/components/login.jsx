import React, { useState } from 'react';
import CardContainer from './shared/card-container';
import TextInput from '../components/inputs/text-inputs';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/new-auth-context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    background: theme.palette.primary.secondary,
    boxShadow: `4px 8px 44px ${theme.palette.background.default}`,
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
  },
}));

const Login = (props) => {
  const { isAuthenticated, user, loading, handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinResponse, setSigninResponse] = useState('');
  const classes = useStyles();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const res = await handleLogin(userData);
    if (res.error) {
      setSigninResponse(res.error);
    } else {
      props.history.push('/');
    }
  };

  return (
    <CardContainer>
      <h1 className='cardTitle'>Login</h1>
      {isAuthenticated && !loading && (
        <p>You are already logged in {user.username}</p>
      )}
      {!isAuthenticated && (
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
          <button type='submit' className={classes.buttonStyle}>
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
