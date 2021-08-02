import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastrar from '../pages/cadastrar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';


const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Login} />
  <Route path="/home" exact component={Home} />
  <Route path="/dashboard" exact component={Dashboard} />
  <Route path="/cadastrar" exact component={Cadastrar} />
  </Switch>
);

export default Routes;
