import React, { useState } from "react";
import { Container } from "./style";
import arrowleft from "../../icons/arrowleft.svg";
import BotaoEnviar from "../Buttons/ButtonEnviar";

const Atribuicao: React.FC = () => {
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
    <Container overlay={overlay}>
      <button className="cor_000">Atribuir</button>
      <div id="atribuir">
        <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Horas:</p>
            <input placeholder="" type="time"/>
            <BotaoEnviar/>
        </div>

      </div>
    </Container>


    </>
  )
};

export default Atribuicao;
