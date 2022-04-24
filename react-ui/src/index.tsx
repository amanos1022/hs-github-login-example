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
const clientSecret = '52df2e4abf3754eae30430e9995897589b88ea1a'
const home = 'https://7314-150-220-74-84.ngrok.io'

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
          <CreateAccount
            client_id={clientId}
            client_secret={clientSecret}
            redirect_uri={home}
          />
        }
      />
    </Routes>
  </Router >
);
