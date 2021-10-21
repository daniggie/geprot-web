import React, { useState } from "react";
import Header from "../../../components/Header";
import { Content, All, PositionMenu, Table } from "./style";
import Menu from "../../../components/Menu";
import { RiFilterFill, RiFilterOffFill } from "react-icons/ri";
import Informations from "../../../components/Informations/InformationsAlocar";

const AlocarEscolherFuncionario: React.FC = () => {
  const [setPesquisaPorNome, pesquisaPorNome] = useState('');
  const [setPesquisaPorNomeFornecedor, pesquisaPorNomeFornecedor] = useState('');
  const [setPesquisaId, pesquisaId] = useState('')

  return(
    <>
    <Header />

    <All>

        <Content>

          <p className="helvetica fonte_28 cor_5 bold"> Consultores Registrados</p>

          <div className="header_filtros">
            <b className="helvetica fonte_15 cor_5 bold"> Filtros </b>
            <hr className="cor_6f"/>
          </div>

          <div className="filters">
            <div className="cols">
              <div className="cols1">
                <b className="helvetica fonte_15 cor_5 normal"> Número: </b>
              </div>

              <div className="cols2">
                <input type="number" placeholder="000000"/>
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_5 normal"> Projeto: </b>
              </div>

              <div className="cols2">
                <input type="text" placeholder="Nome do projeto..."/>
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_5 normal"> Status: </b>
              </div>

              <div className="cols2">
                <select name="Fornecedor">
                  <option value="fornecedor"> -- Selecione aqui --</option>
                </select>
              </div>

              <div className="colsicon">
                <RiFilterOffFill color="#00579D" size={25}/>
              </div>
            </div>

            <div className="cols">
              <div className="cols1">
              </div>

              <div className="cols2">
              </div>

              <div className="cols1">
              </div>

              <div className="cols2">
              </div>
            </div>
          </div>

          <Table>

              <div className="header">
                <div className="title1">
                  <p className="helvetica bold cor_0">Cadastro</p>
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
