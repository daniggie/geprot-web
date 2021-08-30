import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastrar from '../pages/Cadastrar/Cadastrar1';
import Cadastrar2 from '../pages/Cadastrar/Cadastrar2';
import Cadastrar3 from '../pages/Cadastrar/Cadastrar3';
import Cadastrar4 from '../pages/Cadastrar/Cadastrar4';
import Cadastrar5 from '../pages/Cadastrar/Cadastrar5';
import Cadastrar6 from '../pages/Cadastrar/Cadastrar6';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';
import Detalhes from '../pages/Detalhes';
import AprovarHoras from '../pages/AprovarHoras';
import AprovarFuncionario from '../pages/AprovarFuncionario';

const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Login} />
  <Route path="/home" exact component={Home} />
  <Route path="/detalhes" exact component={Detalhes} />
  <Route path="/aprovarhoras" exact component={AprovarHoras} />
  <Route path="/aprovarfuncionario" exact component={AprovarFuncionario} />
  <Route path="/dashboard" exact component={Dashboard} />
  <Route path="/cadastrar" exact component={Cadastrar} />
  <Route path="/cadastrar2" exact component={Cadastrar2} />
  <Route path="/cadastrar3" exact component={Cadastrar3} />
  <Route path="/cadastrar4" exact component={Cadastrar4} />
  <Route path="/cadastrar5" exact component={Cadastrar5} />
  <Route path="/cadastrar6" exact component={Cadastrar6} />



  </Switch>
);

export default Routes;
