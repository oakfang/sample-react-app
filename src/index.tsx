import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import './i18n';
import App from 'ui/ecosystem';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
