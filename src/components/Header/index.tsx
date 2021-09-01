import React from "react";
import { Container } from './style';

import {FiChevronDown, FiLogOut} from "react-icons/fi";

import logo from '../../icons/logo.svg';
import translator_flag from '../../icons/translator_flag.svg';

const Header: React.FC = () => {
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
              <p >Name Gestor Persona </p>
            </div>

          </div>

          <div id="content_translator">

            <div id="translator_select">
              <FiChevronDown size="20px" color="#0091BD"/>
            </div>

            <div id="translator_flag">
              <img src={translator_flag} alt="" />
            </div>

            <div id="content_exit">
              <a href="/">
                <FiLogOut size="30px" color="#0091BD"/>
              </a>
             
            </div>
          </div>
      </Container>
    )
};

export default Header;
