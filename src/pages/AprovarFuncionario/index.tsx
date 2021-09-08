import React, { useState } from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import BotaoAprovar from "../../components/Buttons/ButtonAprovar";
import InformationsApFuncionario from "../../components/Informations/InformationsApFuncionario";
import arrowleft from "../../icons/arrowleft.svg";
import BotaoEnviar from "../../components/Buttons/ButtonEnviar";
import { transitions } from "polished";

const AprovarFuncionario: React.FC = () => {

  const [ overlay, setOverlay ] = useState(true);
  const addOverlay = () => {
    if(!overlay){
     setOverlay(true);
    }else{
      setOverlay(false);
    }

    return overlay;

  };

    return(
      <>
      <Barra />

      <All overlay={overlay}>

        <p className="helvetica cor_0 lighter fonte_20">Seção X</p>
        <p className="helvetica cor_3 lighter fonte_25">Name Person Details</p>

        <div className="table">

          <div className="header">
            <div className="title">
              <p className="helvetica bold cor_0">Data</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Horas trabalhadas</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Descrição</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Aprovação</p>
            </div>

          </div>

          <div className="informations">
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />
            <InformationsApFuncionario />

          </div>

            <div className="header">
            <div className="title2">
              <p className="helvetica bold cor_0 lighter">Total de Horas trabalhadas: </p>
              <b className="helvetica cor_3 fonte_22">72 H</b>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0 lighter">Valor gasto: </p>
              <b className="helvetica cor_3 fonte_22">R$ 1.560,00</b>
            </div>

          </div>

        </div>

        <div className="position">
              <div className="botaorecuse" onClick={addOverlay}>
                <p className="helvetica lighter cor_0">Recusar</p>
              </div>
              <a href="/home">
                <BotaoAprovar />
              </a>
        </div>

        <div id="recusado">
          <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Qual o motivo do recusamento de horas?</p>
            <textarea placeholder="Insira seu motivo aqui..."></textarea>
            <BotaoEnviar/>

          </div>
        </div>

      </All>

      </>
    );
};

export default AprovarFuncionario;
