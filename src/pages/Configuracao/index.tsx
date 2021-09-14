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

        </div>
      </Content>
      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
