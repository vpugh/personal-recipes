import React, { useState, useContext } from 'react';
import TextInput from '../components/inputs/text-inputs';
import { UserContext } from '../context/user-context';

const Login = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinResponse, setSigninResponse] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    fetch('/api/v1/authentication', {
      method: 'POST',
      body: userData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Res', res);
        if (res.error) {
          setSigninResponse(res.error);
        } else {
          setUser(res.user);
          props.history.push('/');
        }
      });
  };

  return (
    <>
      <h2>Login</h2>
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
          />
          <button type='submit'>Sign In</button>
        </form>
      )}
      {signinResponse && <p>{signinResponse}</p>}
    </>
  );
};

export default Login;
