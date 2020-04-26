import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import { AuthProvider } from './context/new-auth-context';

makeServer();

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </AuthProvider>
  );
}

export default App;
