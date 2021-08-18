import React from 'react';
import { AuthProvider } from './hooks/auth';

import GlobalStyle from './styles/global';
import SignIn from './pages/Login';

const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
    </>
  );
};

export default App;
