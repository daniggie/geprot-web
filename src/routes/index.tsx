import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Cadastro from "../pages/Cadastrar";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboards';
import Detalhes from '../pages/Detalhes';
import AprovarHoras from '../pages/AprovarHoras';
import AprovarFuncionario from '../pages/AprovarFuncionario';
import Editar from '../pages/Editar';
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
    <Route path="/cadastro" component={Cadastro} isPrivate/>
    <Route path="/editar/:id" component={Editar} isPrivate/>
    <Route path="/alocarescolherfuncionario" component={AlocarEscolherFuncionario} isPrivate/>
    <Route path="/alocaratribuirfuncionario/:id" component={AlocarAtribuirFuncionario} isPrivate/>
    <Route path="/configuracao" component={Configuracao} isPrivate/>
    <Route path="/cadastrarconsultor" component={CadastroConsultor} isPrivate/>
  </Switch>
);

export default Routes;
