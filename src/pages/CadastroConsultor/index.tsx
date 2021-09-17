import React from "react";
import { FiX } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";

const Configuracao: React.FC = () => {
  return (
    <>
    <Header />

    <All>

      <Container>
        <div className="container_square">

          <div className="title">
            <b className="helvetica fonte_20 cor_5">CADASTRO DE CONSULTOR</b>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Nome do consultor:</p>
            <input type="text" placeholder="Nome completo..."/>
            <p className="helvetica fonte_15 cor_3">Email:</p>
            <input type="text" placeholder="E-mail..."/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Nome do fornecedor:</p>
            <input type="text" placeholder="Nome do fornecedor..."/>
            <p className="helvetica fonte_15 cor_3">Preço das horas:</p>
            <input type="number" min="0" max="10000" step="1" placeholder="R$"/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Senha:</p>
            <input type="password" placeholder="Nome completo..."/>
            <p className="helvetica fonte_15 cor_3">Confirmar senha:</p>
            <input type="password" placeholder="E-mail..."/>
          </div>

          <div className="position">
            <BotaoCancel/>
            <button className="fonte_20">Enviar</button>
          </div>

        </div>
      </Container>

      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
