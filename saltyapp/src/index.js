import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SaltyProvider from './context/saltyContext';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <SaltyProvider>
    <Router>
      <App />
      </Router>
      </SaltyProvider>
  ,
  document.getElementById('root')
);


