import React from "react";
import { Container } from "./styles";

import { RiFilterFill, RiFilterOffFill } from "react-icons/ri";

const FilterAloc: React.FC = () =>{
  return (
    <Container>

      <div className="cols">

        <div className="cols1">
          <b className="helvetica fonte_15 cor_3 normal"> Número: </b>
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
        <b className="helvetica fonte_15 cor_3 normal"> Atribuição: </b>
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
          <b className="helvetica fonte_15 cor_3 normal"> CC: </b>
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
        </div>

        <div className="cols2">
        </div>

        <div className="colsicon">
          <RiFilterFill color="#0091BD" size={25}/>
        </div>

        </div>
      
    </Container>
  );
}

export default FilterAloc;
