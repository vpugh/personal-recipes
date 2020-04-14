import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import { AuthProvider } from './context/auth-context';
import { UserProvider } from './context/user-context';
import { RecipesProvider } from './context/recipes-context';

makeServer();

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <RecipesProvider>
          <div className='App'>
            <Header />
            <Main />
          </div>
        </RecipesProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
