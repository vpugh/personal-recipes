import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import { RecipesProvider } from './context/recipes-context';
import { UserProvider } from './context/user-context';

makeServer();

function App() {
  return (
    <UserProvider>
      <RecipesProvider>
        <div className='App'>
          <Header />
          <Main />
        </div>
      </RecipesProvider>
    </UserProvider>
  );
}

export default App;
