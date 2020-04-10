import React, { useEffect, useState } from 'react';
import CardContainer from './card-container';

const AuthorizedCheck = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api/v1/secret').then((res) => {
      console.log(res.json());
      return res.json();
    });
    // .then((res) => setMessage({ message: res }));
  }, []);

  return (
    <CardContainer>
      <h3>Authorized Check</h3>
      <p>{message}</p>
    </CardContainer>
  );
};

export default AuthorizedCheck;
