import React from 'react';
import Header from './areas/header/header';
import './App.css';
import Main from './Main';
import { makeServer } from './mirage-server';
import { AuthProvider } from './context/auth-context';
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
