import React, { useState } from 'react';
import PageContainer from '../../components/page-container';
import { Link } from 'react-router-dom';
import TextInput from '../../components/inputs/text-input';
import Button from '../../components/buttons/button';
import { useAuth } from '../../context/auth-context';
import { signupUser } from '../../util/api';

const Signup = (props) => {
  const { history } = props;
  const { setCurrentUser } = useAuth();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userCreated, setUserCreated] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    signupUser(userData)
      .then((res) => {
        res.ok && setUserCreated(true);
        return res.json();
      })
      .then((res) => {
        setCurrentUser(res.user);
        setTimeout(history.push('/user/profile'), 0);
      });
  };

  return (
    <PageContainer>
      {!userCreated && (
        <>
          <h1 className='pageTitle'>Sign Up</h1>
          <form onSubmit={handleOnSubmit} autoComplete='new-password'>
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
            <Button fullSize color>
              Create your account
            </Button>
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
      )}
      {userCreated && <p>Welcome to the Personal Recipes App!</p>}
    </PageContainer>
  );
};

export default Signup;
