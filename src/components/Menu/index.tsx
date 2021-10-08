import React, { useState } from "react";
import { Container } from './style';
import { useParams } from "react-router";

import {FiEye, FiFilePlus, FiEdit, FiUserPlus, FiTrendingUp, FiUsers } from "react-icons/fi"

const Menu: React.FC = () => {

  const { id }: {id:string} = useParams();

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});

const teste = "/dashboard/" + secao.secao.id;
    return(
        <Container>
          <div id="menu">

            <div className="content_atalho grid1" id="border1">
                <div className="atalho " id="border1">
                  <FiEye size="35px" color="#fff"/>
                </div>
                <a href="/home">
                  <p id="idparagrafo"> VISUALIZAR PROJETOS </p>
                </a>
            </div>

            <div className="content_atalho grid4">
              <div className="atalho">
                <FiFilePlus size="35px" color="#fff"/>
              </div>
              <a href="/cadastrar">
                <p id="idparagrafo"> CADASTRAR PROJETOS </p>
              </a>
            </div>

            <div className="content_atalho grid3">
              <div className="atalho">
                <FiUserPlus size="35px" color="#fff"/>
              </div>
              <a href="/cadastrarconsultor">
              <p id="idparagrafo"> CADASTRAR CONSULTOR</p>
              </a>
            </div>

            <div className="content_atalho grid5">
              <div className="atalho">
                <FiUsers size="35px" color="#fff"/>
              </div>
              <a href="/alocarescolherfuncionario">
              <p id="idparagrafo"> ALOCAR CONSULTORES </p>
              </a>
            </div>

            <div className="content_atalho cor_4f" id="border2">

                <div className="atalho cor_4f" id="border2">
                  <FiTrendingUp size="35px" color="#fff"/>
                </div>
                <p id="idparagrafo">
                  <a href={teste}>
                  <p className="cor_000">IR PARA DASHBOARDS </p>
                  </a>
                </p>
           </div>
          </div>
        </Container>
    )
}

export default Menu;
