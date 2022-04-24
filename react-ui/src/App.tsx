import React from 'react';
import Login, { LoginParams } from './Login';
import Home from './Home';

const loggedIn = () => {
  return false;
}

const App: React.FC<LoginParams> = (loginParams) => {
  if (!loggedIn()) return <Login {...loginParams} />

  return <Home />
}

export default App;