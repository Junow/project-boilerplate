import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';

import Login from './login';
import Home from './home';
import Header from './header';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>

);

export default App;
