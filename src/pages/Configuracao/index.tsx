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

        </div>
      </Content>
      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
