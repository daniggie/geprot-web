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
import Editar1 from '../pages/Editar/Editar1';
import Editar2 from '../pages/Editar/Editar2';
import Editar3 from '../pages/Editar/Editar3';
import Editar4 from '../pages/Editar/Editar4';
import AlocarEscolherFuncionario from '../pages/Alocar/AlocarEscolherFuncionario';
import AlocarAtribuirFuncionario from '../pages/Alocar/AlocarAtribuirFuncionario';

const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Login} />
  <Route path="/home" exact component={Home} />
  <Route path="/detalhes/:id" exact component={Detalhes} />
  <Route path="/aprovarhoras/:id" exact component={AprovarHoras} />
  <Route path="/aprovarfuncionario" exact component={AprovarFuncionario} />
  <Route path="/dashboard/:id" exact component={Dashboard} />
  <Route path="/cadastrar" exact component={Cadastrar} />
  <Route path="/cadastrar2" exact component={Cadastrar2} />
  <Route path="/cadastrar3" exact component={Cadastrar3} />
  <Route path="/cadastrar4" exact component={Cadastrar4} />
  <Route path="/cadastrar5" exact component={Cadastrar5} />
  <Route path="/cadastrar6" exact component={Cadastrar6} />
  <Route path="/editar1" exact component={Editar1} />
  <Route path="/editar2" exact component={Editar2} />
  <Route path="/editar3" exact component={Editar3} />
  <Route path="/editar4" exact component={Editar4} />
  <Route path="/alocarescolherfuncionario" exact component={AlocarEscolherFuncionario} />
  <Route path="/alocaratribuirfuncionario" exact component={AlocarAtribuirFuncionario} />




  </Switch>
);

export default Routes;
