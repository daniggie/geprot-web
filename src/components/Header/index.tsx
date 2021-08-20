import React from "react";
import { Container } from './style'

import logo from '../../icons/logo.svg';
import translator_select from '../../icons/translator_select.svg';
import translator_flag from '../../icons/translator_flag.svg';
import exit from '../../icons/exit.svg';

const Header: React.FC = () => {
    return(
        <Container>
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

      </Container>
    )
};

export default Header;