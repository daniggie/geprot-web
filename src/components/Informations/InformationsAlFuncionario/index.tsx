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

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">Project's name</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">Providers name</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> dd/mm/aa </p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> Atribuir </p>
      </div>

    </div>
    </Contant>

  </>
  )
};

export default Informations;
