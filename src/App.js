import React from 'react';
import Header from './areas/header/header';
import './App.css';
import Main from './Main';
// import { makeServer } from './mirage-server';
import { AuthProvider } from './context/auth-context';
import { ThemeProvider } from '@material-ui/core/styles';
import { Auth0Provider } from '@auth0/auth0-react';
import defaultTheme from './theme';
import pinkTheme from './theme/pink-theme';
import blueTheme from './theme/blue-theme';
import purpleTheme from './theme/purple-theme';
import greenTheme from './theme/green-theme';
import { useState } from 'react';

// makeServer();

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
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
      scope='openid profile email'
    >
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
    </Auth0Provider>
  );
}

export default App;
