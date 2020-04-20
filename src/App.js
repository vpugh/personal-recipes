import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import AuthReducer from './reducer/authReducer';

makeServer();

function App() {
  return (
    <AuthReducer>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </AuthReducer>
  );
}

export default App;
