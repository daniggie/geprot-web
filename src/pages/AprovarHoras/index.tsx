import React from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import InformationsAprovar from "../../components/Informations/InformationsAprovar";

const AprovarHoras: React.FC = () => {
    return(
      <>
      <Barra />

      <All>

        <p className="helvetica cor_0 lighter fonte_20">Seção X</p>
        <p className="helvetica cor_3 lighter fonte_25">100000000001 -  Projeto GDT</p>

        <div className="table">

          <div className="header">
            <div className="title1">
              <p className="helvetica bold cor_0">Cadastro</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Status</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Nome Completo</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Fornecedor</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Aprovação</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Horas</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0"></p>
            </div>

          </div>

          <div className="content_informations">
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
          </div>

        </div>

      </All>
      </>
    );
};

export default AprovarHoras;
