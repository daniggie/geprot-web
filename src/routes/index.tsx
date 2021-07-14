import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastrar from '../pages/cadastrar';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/cadastrar" exact component={Cadastrar} />
  </Switch>
);

export default Routes;
