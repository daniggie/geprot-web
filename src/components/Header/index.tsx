import React, { useState } from "react";
import { Container } from './style';

import {FiLogOut} from "react-icons/fi";

import logo from '../../icons/logo.svg';
import { FaCog } from "react-icons/fa";
import SwitchFlags from "../SwitchFlags";

const Header: React.FC = () => {

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});

  function ExitClick() {

    localStorage.removeItem("@Geprot:cadastra");
    localStorage.removeItem("@Geprot:token")
    localStorage.removeItem("@Geprot:gestor")

    window.location.reload();
  }
    return(
        <Container>
          <div id="informations">

            <div id="logo_weg">
              <a href="/home">
                <img src={logo} alt="logo" />
              </a>

            </div>

            <div>
              <h1> Gestor </h1>

              <p >{secao.usuario.nome} </p>
            </div>

          </div>

          <div id="container_all">

            <div id="flag">
              <SwitchFlags/>
            </div>

            <div>
              <a href="/configuracao">
                <FaCog size={ 20 } color="#00579D"/>
              </a>
            </div>

            <div className="logout" onClick={ExitClick}>
                <FiLogOut size={ 25 } color="#00579D" />
            </div>
          </div>
      </Container>
    )
};

export default Header;
