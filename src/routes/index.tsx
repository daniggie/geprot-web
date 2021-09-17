import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Cadastrar from '../pages/Cadastrar/Cadastrar1';
import Cadastrar2 from '../pages/Cadastrar/Cadastrar2';
import Cadastrar3 from '../pages/Cadastrar/Cadastrar3';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';
import Detalhes from '../pages/Detalhes';
import AprovarHoras from '../pages/AprovarHoras';
import AprovarFuncionario from '../pages/AprovarFuncionario';
import Editar1 from '../pages/Editar/Editar1';
import Editar2 from '../pages/Editar/Editar2';
import Editar3 from '../pages/Editar/Editar3';
import AlocarEscolherFuncionario from '../pages/Alocar/AlocarEscolherFuncionario';
import AlocarAtribuirFuncionario from '../pages/Alocar/AlocarAtribuirFuncionario';
import Configuracao from '../pages/Configuracao';
import CadastroConsultor from '../pages/CadastroConsultor';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/detalhes/:id" component={Detalhes} isPrivate/>
    <Route path="/aprovarhoras/:id" component={AprovarHoras} isPrivate/>
    <Route path="/aprovarfuncionario/:id/:consultorId" component={AprovarFuncionario} isPrivate/>
    <Route path="/dashboard/:id/" component={Dashboard} isPrivate/>
    <Route path="/cadastrar" component={Cadastrar} isPrivate/>
    <Route path="/cadastrar2" component={Cadastrar2} isPrivate/>
    <Route path="/cadastrar3" component={Cadastrar3} isPrivate/>
    <Route path="/editar1" component={Editar1} isPrivate/>
    <Route path="/editar2" component={Editar2} isPrivate/>
    <Route path="/editar3" component={Editar3} isPrivate/>
    <Route path="/alocarescolherfuncionario" component={AlocarEscolherFuncionario} isPrivate/>
    <Route path="/alocaratribuirfuncionario/:id" component={AlocarAtribuirFuncionario} isPrivate/>
    <Route path="/configuracao" component={Configuracao} isPrivate/>
    <Route path="/cadastrarconsultor" component={CadastroConsultor} isPrivate/>
  </Switch>
);

export default Routes;
