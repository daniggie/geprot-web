import React, { useState } from "react";
import { Container } from './style';

import {FiLogOut} from "react-icons/fi";

import logo from '../../icons/logo.svg';
import { FaCog } from "react-icons/fa";
import SwitchFlags from "../SwitchFlags";

const Header: React.FC = () => {

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});
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

              <p >{secao.nome} </p>
            </div>

          </div>

          <div id="content_all">

            <div id="flag">
              <SwitchFlags/>
            </div>

            <div>
              <a href="/configuracao">
                <FaCog size={ 20 } color="#0091BD"/>
              </a>

            </div>

            <div>
              <a href="/">
                <FiLogOut size={ 25 } color="#0091BD"/>
              </a>
            </div>
          </div>
      </Container>
    )
};

export default Header;
