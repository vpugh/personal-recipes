import React, { useState, useEffect } from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';

makeServer();

function App() {
  const [token, setToken] = useState();

  // useEffect(() => {
  //   fetch('/api/v1/auth')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (localStorage.length === 0) {
  //         localStorage.setItem('token', data.encodedToken);
  //         setToken('ENCODED SECRET MESSAGE');
  //       } else {
  //         const encodedToken = localStorage.getItem('token');
  //         fetch('/api/v1/decode', {
  //           headers: {
  //             Authorization: encodedToken,
  //           },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             // console.log(data);
  //             setToken(data.decodedToken.message);
  //           });
  //       }
  //     });
  // }, []);

  return (
    <div className='App'>
      <p>Local Storage is: {token}</p>
      <Header />
      <Main />
    </div>
  );
}

export default App;
