import React, { useState } from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { makeServer } from './mirage-server';
import { AuthProvider } from './context/new-auth-context';
import { ThemeProvider } from '@material-ui/core/styles';
import defaultTheme from './theme';
import pinkTheme from './theme/pink-theme';
import blueTheme from './theme/blue-theme';
import purpleTheme from './theme/purple-theme';
import greenTheme from './theme/green-theme';

makeServer();

const returnTheme = (selected) => {
  switch (selected) {
    case 'pink':
      return pinkTheme;
    case 'blue':
      return blueTheme;
    case 'purple':
      return purpleTheme;
    case 'green':
      return greenTheme;
    default:
      return defaultTheme;
  }
};

function App() {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themeColor = () => {
    return returnTheme(selectedTheme).palette.background.main;
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={returnTheme(selectedTheme)}>
        <div className='App'>
          <Header />
          <Main
            bgColor={themeColor}
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
          />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
