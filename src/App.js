import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';

makeServer();

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
