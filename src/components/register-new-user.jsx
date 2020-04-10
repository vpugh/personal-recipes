import React, { useState } from 'react';
import CardContainer from './card-container';
import TextInput from './inputs/text-inputs';

const RegisterNewUser = () => {
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
    fetch('/api/v1/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }).then((result) => result.ok && setUserSaved(true));
  };

  const checkAllUsers = () => {
    fetch('/api/v1/users')
      .then((res) => res.json())
      .then((data) => {
        console.log('User Data', data);
      });
  };

  return (
    <CardContainer>
      <h1 style={{ marginTop: 0 }}>Register</h1>
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
        <button type='submit'>Register</button>
      </form>
      <button type='button' onClick={checkAllUsers}>
        Check All Users
      </button>
      {userSaved && <p>Welcome to the Personal Recipe App!</p>}
    </CardContainer>
  );
};

export default RegisterNewUser;
