import React from "react";
import { Header, TituloF, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont, BarTitle } from './styles';
import Menu from '../../components/Menu';
import logo from '../../icons/logo.svg';
import translator_flag from '../../icons/translator_flag.svg';

 import { FiPieChart, FiBarChart2, FiPlusSquare, FiEye, FiEdit, FiUserPlus, FiLogOut, FiChevronDown } from "react-icons/fi"

 import { BiBarChart } from "react-icons/bi" ; 

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
            <FiChevronDown size="15px"/>
          </div>

          <div id="translator_flag">
            <img src={translator_flag} alt="" />
          </div>

          <div id="content_exit">
            <FiLogOut size="30px"/>
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
        <BodyDashboards>
          <Container>
            <MediumCont>
              <BarTitle className="status cor_3f">
                <p>VERBA UTILIZADA</p> 
                <FiPlusSquare size="15px"/>
              </BarTitle>
              <FiPieChart size="150px" />
            </MediumCont>
            <BigCont>
              <BarTitle className="status cor_3f">
                <p>UTILIZAÇÃO DA VERBA</p> 
                <FiPlusSquare size="15px"/>
              </BarTitle>
              <FiBarChart2 size="150px" />
            </BigCont>
          </Container>
          <Container>
            <MediumCont>
              <BarTitle className="status cor_3f">
                <p>VERBA LIBERADA</p> 
                <FiPlusSquare size="15px"/>
              </BarTitle>
              <FiPieChart size="150px" />
            </MediumCont>
            <LitlleCont>
              <BarTitle className="status cor_3f">
                <p>VERBA DISPONÍVEL</p>
              </BarTitle>
            </LitlleCont>
            <LitlleCont>
              <BarTitle className="status cor_3f">
                <p>VERBA NÃO LIBERADA</p>
              </BarTitle>
            </LitlleCont>
            <LitlleCont>
              <BarTitle className="status cor_3f">
                <p>VERBA APROVADA</p>
              </BarTitle>
            </LitlleCont>
          </Container>
        </BodyDashboards>

        <Menu>
        </Menu>
      </All>
    </>
  );
};

export default Dashboard;
