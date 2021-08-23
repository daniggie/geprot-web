import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastrar from '../pages/Cadastrar';
import Cadastrar2 from '../pages/Cadastrar2';
import Cadastrar3 from '../pages/Cadastrar3';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';
import Detalhes from '../pages/Detalhes';
import AprovarHoras from '../pages/AprovarHoras';

const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Login} />
  <Route path="/home" exact component={Home} />
  <Route path="/detalhes" exact component={Detalhes} />
  <Route path="/aprovarhoras" exact component={AprovarHoras} />
  <Route path="/dashboard" exact component={Dashboard} />
  <Route path="/cadastrar" exact component={Cadastrar} />
  <Route path="/cadastrar2" exact component={Cadastrar2} />
  <Route path="/cadastrar3" exact component={Cadastrar3} />


  </Switch>
);

export default Routes;
