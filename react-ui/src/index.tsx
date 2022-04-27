import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App'
import CreateAccount from './CreateAccount';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const clientId = 'Iv1.8fb41a270ee0fd0d'
const home = 'https://db31-65-201-88-74.ngrok.io'

root.render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <App
            clientId={clientId}
            redirectUri={`${home}/create-account`}
          />
        }
      />
      <Route
        path="/create-account"
        element={
          <CreateAccount />
        }
      />
    </Routes>
  </Router >
);
