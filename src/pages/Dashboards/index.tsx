import React from "react";
import { Header, TituloF, Menu, All, Filtros } from './styles';

import logo from '../../icons/logo.svg';
import translator_select from '../../icons/translator_select.svg';
import translator_flag from '../../icons/translator_flag.svg';
import exit from '../../icons/exit.svg';
import editar from '../../icons/editar.svg';
import cadastrar from '../../icons/cadastrar.svg';
import view from '../../icons/view.svg';
import dashboard from '../../icons/dashboards.svg';
import alocar from '../../icons/alocar.svg';
import arrow from '../../icons/arrow.svg';

const Dashboard: React.FC = () => {

  return(
    <>
      <Header>
        <div id="informations">

          <div id="logo_weg">
            <img src={logo} alt="logo" />
          </div>

          <div>
            <h1> Gestor </h1>
            <p >Name Gestor Persona </p>
          </div>

        </div>

        <div id="content_translator">

          <div id="translator_select">
            <img src={translator_select} alt="logo" />
          </div>

          <div id="translator_flag">
            <img src={translator_flag} alt="" />
          </div>

          <div id="content_exit">
            <img src={exit} alt="" />
          </div>
        </div>

      </Header>

      <TituloF>
        <p>Filtros</p>
        <div></div>
      </TituloF>

      <Filtros>

        <div className="content_procurar">
            <div className="texto cor_4">
                Procurar:
            </div>

            <div>
                <input className="procurar cor_0" type="text" id="fname" name="fname" placeholder="Digite o nome do projeto..." />
            </div>
        </div>

        <div className="content_title">
            <div className="texto cor_4">
                Status:
            </div>

            <form>
                <select className="status cor_3f" name="status">
                    <option value="status">Todos</option>
                    <option value="status">Andamento</option>
                    <option value="status">Atrasado</option>
                    <option value="status">Concluído</option>
                </select>
            </form>
        </div>

        <div className="content_title">
            <div className="texto cor_4">
                Tempo:
            </div>

            <form>
                <select className="status cor_3f" name="status">
                    <option value="status">Últimos 7 dias</option>
                    <option value="status">Último mês</option>
                    <option value="status">Últimos 6 meses</option>
                    <option value="status">Último ano</option>
                </select>
            </form>
        </div>

        <div className="content_title">
            <div className="texto cor_4">
                Centro de Custos:
            </div>

            <form>
                <select className="status cor_3f" name="status">
                    <option value="status">Todos</option>
                    <option value="status">Centro ABCD</option>
                    <option value="status">Centro EFGH</option>
                    <option value="status">Centro IJKL</option>
                </select>
            </form>
        </div>

      </Filtros>

      <All>
          <Menu>
            <div id="menu">

              <div className="content_atalho cor_1f" id="border1">
                  <div className="atalho cor_1f" id="border1">
                    <img src={view} alt="" />
                  </div>
                  <p id="idparagrafo"> VISUALIZAR PROJETOS </p>
              </div>

              <div className="content_atalho cor_2f">
                <div className="atalho cor_2f">
                  <img src={cadastrar} alt="" />
                </div>
                <p id="idparagrafo"> CADASTRAR PROJETOS </p>
              </div>

              <div className="content_atalho cor_1f">
                <div className="atalho cor_1f">
                  <img src={editar} alt="" />
                </div>
                <p id="idparagrafo"> EDITAR PROJETOS </p>
              </div>

              <div className="content_atalho cor_3f">
                <div className="atalho cor_3f">
                  <img src={alocar} alt="" />
                </div>
                <p id="idparagrafo"> ALOCAR CONSULTORES </p>
              </div>

              <div className="content_atalho cor_4f" id="border2">
                <div className="atalho cor_4f" id="border2">
                  <img src={dashboard} alt="" />
                </div>
                <p id="idparagrafo"> IR PARA DASHBOARDS </p>
              </div>
            </div>
          </Menu>

      </All>


    </>
  );
};

export default Dashboard;
