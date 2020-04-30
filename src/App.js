import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import { AuthProvider } from './context/new-auth-context';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

makeServer();

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Header />
          <Main />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
