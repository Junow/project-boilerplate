import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';


import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './components/TodoContainer';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/counter" component={CounterContainer} />
      <Route path="/todo" component={TodoContainer} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>

);

export default App;
