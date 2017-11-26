import { h } from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../routes/home';
import Profile from '../routes/profile';
import Header from './header';

export default () => (
  <Router>
    <div id="app">
      <Header />
      <Route exact component={Home} path="/" />
      <Route exact component={Profile} path="/profile/" />
      <Route component={Profile} path="/profile/:user" />
    </div>
  </Router>
);
