import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* inital App loads when the user is in path assessment */
  ReactDOM.render(
    <Router >
        <Route path = "/assessment" component = {App} />
    </Router>
    , document.getElementById('root'));
