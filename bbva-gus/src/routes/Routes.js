import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Menu from '../pages/Home'
import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
