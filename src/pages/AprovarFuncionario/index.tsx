import React from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import BotaoAprovar from "../../components/Buttons/ButtonAprovar";
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import InformationsApFuncionario from "../../components/Informations/InformationsApFuncionario";

const AprovarFuncionario: React.FC = () => {

    return(
      <>
      <Barra />

      <All>

        <p className="helvetica cor_0 lighter fonte_20">Seção X</p>
        <p className="helvetica cor_3 lighter fonte_25">Name Person Details</p>

        <div className="table">

          <div className="header">
            <div className="title">
              <p className="helvetica bold cor_0">Data</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Hora de início</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Hora de saída</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Horas trabalhadas</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Descrição</p>
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
            <a href="/home">
              <BotaoCancel>
              </BotaoCancel>
            </a>
          <BotaoAprovar />
        </div>

      </All>
      </>
    );
};

export default AprovarFuncionario;
