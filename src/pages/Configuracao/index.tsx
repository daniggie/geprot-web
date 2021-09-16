import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Content } from "./style"

const Configuracao: React.FC = () => {
  return (
    <>
    <Header />

    <All>

      <Content>
        <div className="config">

          <div className="line">
            <p className="helvetica fonte_20 cor_5 bold">CONFIGURAÇÕES</p>
          </div>

          <div>
            <div>Configurações de texto</div>
            <div>
              <div>Tamanho da fonte</div>
              <div>Padrão - list</div>
            </div>
          </div>

          <div>
            <div>Configurações da conta</div>
            <div>Trocar nome de usuário</div>
            <div>Alterar sua senha</div>
            <div>Alterar foto de perfil</div>
            <div>Desativar notificações</div>
          </div>

        </div>
      </Content>
      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
