import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { UserContext } from '../context/user-context';

const UserProfile = (props) => {
  const [user] = useContext(UserContext);

  const redirectHome = () => {
    setTimeout(() => {
      props.history.push('/');
    }, 2000);
  };

  if (user) {
    const { username, email } = user;
    return (
      <CardContainer>
        <h1 className='cardTitle'>User Profile</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <h2 style={{ margin: 0 }}>Error not logged in!</h2>
      <p>Being redirected back to homepage.</p>
      {redirectHome()}
    </CardContainer>
  );
};

export default UserProfile;
