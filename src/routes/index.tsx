import React from 'react';
import { Switch } from 'react-router-dom';
import Cadastrar from '../pages/cadastrar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';
import Route from './Route';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/cadastrar" component={Cadastrar} />
  </Switch>
);

export default Routes;
