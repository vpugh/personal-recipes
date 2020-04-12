import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import { RecipesProvider } from './context/recipes-context';

makeServer();

function App() {
  return (
    <RecipesProvider>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </RecipesProvider>
  );
}

export default App;
