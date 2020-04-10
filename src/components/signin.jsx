import React, { useState } from 'react';
import CardContainer from './card-container';
import TextInput from './inputs/text-inputs';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinResponse, setSigninResponse] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    fetch('/api/v1/authenticate', {
      method: 'POST',
      body: userData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Res', res);
        if (res.error) {
          setSigninResponse(res.error);
        } else {
          props.history.push('/');
          console.log(res.token);
        }
      });
  };

  return (
    <CardContainer>
      <h1 style={{ marginTop: 0 }}>Sign In</h1>
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
      {signinResponse && <p>{signinResponse}</p>}
    </CardContainer>
  );
};

export default SignIn;
