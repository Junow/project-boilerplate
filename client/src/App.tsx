import React from 'react';
import {
 Switch, Route, BrowserRouter, Redirect 
} from 'react-router-dom';

import Login from './login';
import Signup from './signup';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>

);

export default App;
