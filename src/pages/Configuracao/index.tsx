import React, {useState} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Content } from "./style";
import {FiToggleLeft, FiToggleRight} from "react-icons/fi";
import ButtonSalvar from "../../components/Buttons/ButtonSalvar";
import {HiEye, HiEyeOff} from "react-icons/hi"

const Configuracao: React.FC = () => {
  const [enableTalk, setEnableTalk] = useState(false);
  const handleClickTalk = (e:any) => {
    e.preventDefault()
    setEnableTalk(!enableTalk);
  };

  const [enableNotify, setEnableNotify] = useState(false);
  const handleClickNotify = (e:any) => {
    e.preventDefault()
    setEnableNotify(!enableNotify);
  };

  const [showPass, setShowPass] = useState(false);
  const handleClickEye = (e:any) => {
    e.preventDefault()
    setShowPass(!showPass)
  };

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
                          <a className="font">Grande</a>
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
                    {enableTalk ? (<FiToggleRight size={35} color="#00579D" onClick={handleClickTalk}/>) : (<FiToggleLeft color="#828282" size={35} onClick={handleClickTalk}/>)}
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
                  <input type={ showPass ? "text" : "password"} id="senha" value="123456" placeholder="Digite aqui..."/>
                  <div className="login_eye">
                    {showPass ? (<HiEye size={15} color="#00579D" onClick={handleClickEye}/>) : (<HiEyeOff color="#828282" size={15} onClick={handleClickEye}/>)}
                  </div>
                </div>
                <div className="line_option">
                  <h3>Alterar foto de perfil</h3>
                  <button>Escolher</button>
                </div>
                <div className="line_option">
                  <h3>Desativar notificações</h3>
                  <div>
                    {enableNotify ? (<FiToggleRight size={35} color="#00579D" onClick={handleClickNotify}/>) : (<FiToggleLeft color="#828282" size={35} onClick={handleClickNotify}/>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>
              <div className="position">
                <ButtonSalvar/>
              </div>
          </div>
        </Content>
        <Menu/>
      </All>
    </>
  )
};

export default Configuracao;
