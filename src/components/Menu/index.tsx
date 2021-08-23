import React from "react";
import { Container } from './style';
import editar from '../../icons/editar.svg';
import cadastrar from '../../icons/cadastrar.svg';
import view from '../../icons/view.svg';
import dashboard from '../../icons/dashboards.svg';
import alocar from '../../icons/alocar.svg';

const Menu: React.FC = () => {
    return(
        <Container>
          <div id="menu">

            <div className="content_atalho cor_1f" id="border1">
                <div className="atalho cor_1f" id="border1">
                  <img src={view} alt="" />
                </div>
                <a href="/home">
                  <p id="idparagrafo"> VISUALIZAR PROJETOS </p>
                </a>
            </div>

            <div className="content_atalho cor_2f">
              <div className="atalho cor_2f">
                <img src={cadastrar} alt="" />
              </div>
              <a href="/cadastrar">
                <p id="idparagrafo"> CADASTRAR PROJETOS </p>
              </a>
            </div>

            <div className="content_atalho cor_1f">
              <div className="atalho cor_1f">
                <img src={editar} alt="" />
              </div>
              <a href="/editarprojetos">
                <p id="idparagrafo"> EDITAR PROJETOS </p>
              </a>
            </div>

            <div className="content_atalho cor_3f">
              <div className="atalho cor_3f">
                <img src={alocar} alt="" />
              </div>
              <a href="/alocarhoras">
              <p id="idparagrafo"> ALOCAR CONSULTORES </p>
              </a>
            </div>

            <div className="content_atalho cor_4f" id="border2">

                <div className="atalho cor_4f" id="border2">
                  <img src={dashboard} alt="" />
                </div>
                <p id="idparagrafo">
                  <a href="/dashboard">IR PARA DASHBOARDS
                  </a>
                </p>
           </div>
          </div>
        </Container>
    )
}

export default Menu;
