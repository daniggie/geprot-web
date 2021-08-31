import React from "react";
import Header from "../../../components/Header";
import { Content, All, PositionMenu } from "./style";
import Menu from "../../../components/Menu";
import { RiFilterFill, RiFilterOffFill } from "react-icons/ri";

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

            <div className="cols">

              <div className="cols1">
                <b className="helvetica fonte_15 cor_3 normal"> Cadastro: </b>
              </div>

              <div className="cols2">
                <input type="number" placeholder="000000"/>
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_3 normal"> Projeto: </b>
              </div>

              <div className="cols2">
                <input type="text" placeholder="Nome do projeto..."/>
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_3 normal"> Fornecedor: </b>
              </div>

              <div className="cols2">
                <select name="Fornecedor">
                  <option value="fornecedor"> -- Selecione aqui --</option>
                </select>
              </div>

              <div className="colsicon">
                <RiFilterOffFill color="#0091BD" size={25}/>
              </div>

            </div>

            <div className="cols">

              <div className="cols1">
                <b className="helvetica fonte_15 cor_3 normal"> Nome: </b>
              </div>

              <div className="cols2">
                <input type="text" placeholder="Nome do fornecedor..."/>
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_3 normal"> Status: </b>
              </div>

              <div className="cols2">
                <select name="Fornecedor">
                  <option value="fornecedor"> -- Selecione aqui --</option>
                </select>
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_3 normal"> Demanda: </b>
              </div>

              <div className="cols2">
                <select name="Fornecedor">
                  <option value="fornecedor"> -- Selecione aqui --</option>
                </select>
              </div>

              <div className="colsicon">
                <RiFilterFill color="#0091BD" size={25}/>
              </div>

            </div>


          </div>

        </Content>

        <PositionMenu>
          <Menu/>
        </PositionMenu>



  </All>




    </>
  )
}

export default AlocarEscolherFuncionario;
