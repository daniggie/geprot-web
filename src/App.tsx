import React from 'react';

import GlobalStyle from './styles/global';

import AuthProvider from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
