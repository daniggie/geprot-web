import React from "react";
import { CgSearchLoading } from "react-icons/cg";
import { Contant } from "./style";

const Informations: React.FC = () => {
  return (
    <>
    <Contant>
      <div className="columns">
      <div className="column1">
          <p className="helvetica light fonte_15 cor_0">000000</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0">Inativo</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">Persons name</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">Providers name</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> 1 </p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0">
          <a href="/alocaratribuirfuncionario">
            <CgSearchLoading size={25} color="#0091BD"/>
          </a>
        </p>
      </div>
    </div>
    </Contant>

  </>
  )
};

export default Informations;
