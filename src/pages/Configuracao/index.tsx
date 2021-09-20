import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Content } from "./style";
import {FiToggleLeft, FiToggleRight} from "react-icons/fi"

const Configuracao: React.FC = () => {
  return (
    <>
      <Header/>
      <All>

        <Content>
          <div className="config">

            <div className="line">
              <p className="helvetica fonte_20 cor_5 bold">CONFIGURAÇÕES</p>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1 className="helvetica fonte_20 cor_5 bold">Configurações de texto</h1>
              <div className="cont_option">
                <div className="line_option">
                  <h3>Tamanho da fonte</h3>
                  <div className="switch_font">
                    <div className="lang-menu">
                      <div className="selected-lang">
                        Normal
                      </div>
                      <ul>
                        <li>
                          <a className="font">Pequena</a>
                        </li>
                        <li>
                          <a className="font">Média</a>
                        </li>
                        <li>
                          <a className="font">Normal</a>
                        </li>
                        <li>
                          <a className="font">Grande</a>
                        </li>
                        <li>
                          <a className="font">Gigante</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1 className="helvetica fonte_20 cor_5 bold">Acessibilidade</h1>
              <div className="cont_option">
                <div className="line_option">
                  <h3>TalkBack</h3>
                  <div>
                    <FiToggleLeft className="off" fontSize="35px"/>
                    <FiToggleRight className="on" fontSize="35px"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1 className="helvetica fonte_20 cor_5 bold">Configurações da conta</h1>
              <div className="cont_option">
                <div className="line_option">
                  <h3>Alterar nome de usuário</h3>
                  <input type="text" id="nome" value="Brayan" placeholder="Digite aqui..." />
                </div>
                <div className="line_option">
                  <h3>Alterar sua senha</h3>
                  <input type="password" id="senha" value="123456" placeholder="Digite aqui..." />
                </div>
                <div className="line_option">
                  <h3>Alterar foto de perfil</h3>
                  <button>Escolher</button>
                </div>
                <div className="line_option">
                  <h3>Desativar notificações</h3>
                  <div>
                    <FiToggleLeft className="off" fontSize="35px"/>
                    <FiToggleRight className="on" fontSize="35px"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1>Button</h1>
            </div>
          </div>
        </Content>
        <Menu/>
      </All>
    </>
  )
};

export default Configuracao;
