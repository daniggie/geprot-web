import React, { useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import { Contant, Overlay } from "./style";
import arrowleft from "../../../icons/arrowleft.svg";

const Informations: React.FC = () => {
  const [ overlay, setOverlay ] = useState(true);
  const addOverlay = () => {
    if(!overlay){
     setOverlay(true);
    }else{
      setOverlay(false);
    }

    return overlay;

  };
  return (
    <>
    <Contant overlay={overlay}>
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
        <p className="helvetica light fonte_15 cor_0" onClick={addOverlay}> Atribuir </p>
      </div>

    </div>

    </Contant>

    <Overlay overlay={overlay}>
          <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Escolha o projeto:</p>
            <input type="text" />

          </div>
    </Overlay>





  </>
  )
};

export default Informations;
