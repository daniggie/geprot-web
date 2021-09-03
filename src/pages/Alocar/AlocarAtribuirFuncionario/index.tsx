import React from "react";
import Header from "../../../components/Header";
import { Content, All, PositionMenu, Table } from "./style";
import Menu from "../../../components/Menu";
import Informations from "../../../components/Informations/InformationsAlFuncionario";
import FilterFunc from "../../../components/FilterAlFuncionario";

const AlocarAtribuirFuncionario: React.FC = () => {
  return(
    <>
    <Header />

    <All>

        <Content>

          <div className="funcionario">

            <div className="line">
              <p className="helvetica bold cor_0 fonte_20"> Name Person Exemplo</p>
              <p className="helvetica lighter cor_4 fonte_15"> STATUS: ATIVO</p>
            </div>

            <div className="line">
              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Cadastro: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> 000000 </p>
              </div>

              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Data do cadastro: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> dd / mm / yyyy </p>
              </div>
            </div>

            <div className="line">
            <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Fornecedor: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> Provider's name </p>
              </div>

              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Valor da hora: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> R$ 00,00 </p>
              </div>
            </div>

            <div className="line">
            <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Email do Consultor: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> xxxxxxxxxxx@email.com </p>
              </div>
              
            </div>
            
            <div className="line">
              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Email do fornecedor: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> xxxxxxxxxxx@email.com </p>
              </div>
            </div>
              

          </div>

          <div className="header_filtros">
            <b className="helvetica fonte_15 cor_3 bold"> Filtros </b>
            <hr className="cor_3f"/>
          </div>

          <div className="filtros">
            <FilterFunc/>
          </div>

          <Table>

              <div className="header">
                <div className="title1">
                  <p className="helvetica bold cor_0">Número</p>
                </div>

                <div className="title1">
                  <p className="helvetica bold cor_0">Status</p>
                </div>

                <div className="title2">
                  <p className="helvetica bold cor_0">Título do projeto</p>
                </div>

                <div className="title2">
                  <p className="helvetica bold cor_0">CC Pagante</p>
                </div>

                <div className="title1">
                  <p className="helvetica bold cor_0">Criação</p>
                </div>

                <div className="title1">
                  <p className="helvetica bold cor_0"> Atribuição </p>
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

export default AlocarAtribuirFuncionario;