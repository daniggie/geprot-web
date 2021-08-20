import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';
import Detalhes from '../pages/Detalhes';
import Cadastrar from '../pages/cadastrar';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Login} />
  <Route path="/home" exact component={Home} />
  <Route path="/detalhes" exact component={Detalhes} />
  <Route path="/dashboard" exact component={Dashboard} />
  <Route path="/cadastrar" exact component={Cadastrar} />
  </Switch>
);

export default Routes;
