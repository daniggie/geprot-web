import React from "react";
import { Container } from './style';

import {FiEye, FiFilePlus, FiEdit, FiUserPlus, FiTrendingUp} from "react-icons/fi"

const Menu: React.FC = () => {
    return(
        <Container>
          <div id="menu">

            <div className="content_atalho cor_1f" id="border1">
                <div className="atalho cor_1f" id="border1">
                  <FiEye size="35px" color="#fff"/>
                </div>
                <a href="/home">
                  <p id="idparagrafo"> VISUALIZAR PROJETOS </p>
                </a>
            </div>

            <div className="content_atalho cor_2f">
              <div className="atalho cor_2f">
                <FiFilePlus size="35px" color="#fff"/>
              </div>
              <a href="/cadastrar">
                <p id="idparagrafo"> CADASTRAR PROJETOS </p>
              </a>
            </div>

            <div className="content_atalho cor_1f">
              <div className="atalho cor_1f">
                <FiEdit size="35px" color="#fff"/>
              </div>
              <a href="/">
                <p id="idparagrafo"> EDITAR PROJETOS </p>
              </a>
            </div>

            <div className="content_atalho cor_3f">
              <div className="atalho cor_3f">
                <FiUserPlus size="35px" color="#fff"/>
              </div>
              <a href="/">
              <p id="idparagrafo"> ALOCAR CONSULTORES </p>
              </a>
            </div>

            <div className="content_atalho cor_4f" id="border2">

                <div className="atalho cor_4f" id="border2">
                  <FiTrendingUp size="35px" color="#fff"/>
                </div>
                <p id="idparagrafo">
                  <a href="/dashboard">
                  <p className="cor_000">IR PARA DASHBOARDS </p>
                  </a>
                </p>
           </div>
          </div>
        </Container>
    )
}

export default Menu;
