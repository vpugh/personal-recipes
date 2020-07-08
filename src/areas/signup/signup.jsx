import React, { useState } from 'react';
import PageContainer from '../../components/page-container';
import { Link } from 'react-router-dom';
import TextInput from '../../components/inputs/text-input';
import SubmitButton from '../../components/buttons/button';
import { useAuth } from '../../context/auth-context';
import { signupUser } from '../../util/api';
import { ErrorAlert } from '../../components/alerts/error-alert';

const Signup = (props) => {
  const { history } = props;
  const { setCurrentUser } = useAuth();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    signupUser(userData).then((res) => {
      if (res.error) {
        setError(res.error);
      } else {
        setCurrentUser(res);
        setTimeout(history.push('/user/settings'), 0);
      }
    });
  };

  return (
    <PageContainer>
      <>
        <h1 className='pageTitle'>Sign Up</h1>
        <form onSubmit={handleOnSubmit}>
          <TextInput
            label='Username'
            placeholder='Your psuedonym'
            required={true}
            value={username}
            setFunc={setUsername}
            noAutocomplete
          />
          <TextInput
            label='Email'
            placeholder="How you'll login"
            required={true}
            value={email}
            setFunc={setEmail}
            noAutocomplete
            type='email'
          />
          <TextInput
            label='Password'
            placeholder='Something to access your account'
            required={true}
            value={password}
            setFunc={setPassword}
            type='password'
            noAutocomplete
          />
          <SubmitButton fullSize color>
            Create your account
          </SubmitButton>
          <p>
            Already have an account?{' '}
            <Link
              style={{ display: 'inline-block', color: 'inherit' }}
              to='/login'
            >
              Login
            </Link>
          </p>
        </form>
      </>
      {error && <ErrorAlert>{error}</ErrorAlert>}
    </PageContainer>
  );
};

export default Signup;
