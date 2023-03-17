import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HammerApp from './HammerApp';
import { AuthProvider } from './providers/AuthProvider';
//import "./styles/reset.scss";
import "./styles/main.scss";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
      <AuthProvider>
        <HammerApp/>
      </AuthProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();