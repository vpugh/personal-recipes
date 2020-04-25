import React, { useState, useContext } from 'react';
import CardContainer from './shared/card-container';
import TextInput from './inputs/text-inputs';
import { UserContext } from '../context/user-context';
import { Link } from 'react-router-dom';
import { signupUser } from '../util/api';

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

const Signup = (props) => {
  const [, setUser] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userSaved, setUserSaved] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    signupUser(userData)
      .then((res) => {
        res.ok && setUserSaved(true);
        return res.json();
      })
      .then((res) => {
        setUser(res.user);
        props.history.push('/user/profile');
      });
  };

  return (
    <CardContainer>
      <h1 className='cardTitle'>Sign Up</h1>
      <form onSubmit={handleOnSubmit}>
        <TextInput
          labelTitle='Username'
          placeholder='Something to call you'
          required={true}
          value={username}
          setFunction={setUsername}
        />
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
        />
        <button type='submit' style={buttonStyle}>
          Signup
        </button>
        <p style={{ paddingTop: 10 }}>
          Already have an account?{' '}
          <Link style={{ display: 'inline-block' }} to='/login'>
            Login
          </Link>
        </p>
      </form>
      {userSaved && <p>Welcome to the Personal Recipe App!</p>}
    </CardContainer>
  );
};

export default Signup;
