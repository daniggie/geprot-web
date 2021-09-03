import React from "react";
import Header from "../../../components/Header";
import { Content, All, PositionMenu, Table } from "./style";
import Menu from "../../../components/Menu";
import Informations from "../../../components/Informations/InformationsAlocar";
import FilterAloc from "../../../components/FilterAloc";

const AlocarEscolherFuncionario: React.FC = () => {
  return(
    <>
    <Header />

    <All>

        <Content>

          <p className="helvetica fonte_28 cor_5 bold"> Consultores Registrados</p>

          <div className="header_filtros">
            <b className="helvetica fonte_15 cor_3 bold"> Filtros </b>
            <hr className="cor_3f"/>
          </div>

          <div className="filtros">
            <FilterAloc/>
          </div>

          <Table>

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
                  <p className="helvetica bold cor_0">Demandas</p>
                </div>

                <div className="title1">
                  <p className="helvetica bold cor_0"></p>
                </div>

              </div>

              <div className="contant_informations">
                <Informations/>
                <Informations/>
                <Informations/>
                <Informations/>
                <Informations/>
                <Informations/>
              </div>

          </Table>

          

        </Content>

        <PositionMenu>
          <Menu/>
        </PositionMenu>



  </All>




    </>
  )
}

export default AlocarEscolherFuncionario;