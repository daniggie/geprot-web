import React, { useState } from "react";
import { Container } from "./style";
import arrowleft from "../../icons/arrowleft.svg";
import { RiCheckLine } from "react-icons/ri";
import api from "../../services/api";
import { useCallback } from "hoist-non-react-statics/node_modules/@types/react";

interface AtribuicaoProps {
  projetos_id: number,
  usuarios_id: string
}

interface AlocarProps {
  projetos_id: number,
  usuarios_id: number,
  limiteHoras: number
}

// valores chegando pelo botao, falta fazer a funcao para alocar
const Atribuicao: React.FC<AtribuicaoProps> = ({projetos_id, usuarios_id}) => {
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
      <div className="atribuir">
        <button className="cor_000" onClick={addOverlay}>Atribuir</button>
      </div>

      <div id="atribuir">
        <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Horas:</p>
            <input placeholder="0H" type="number"/>
            <button><RiCheckLine size={ 25 } color="#fff"/></button>


        </div>
      </div>
    </Container>


    </>
  )
};

export default Atribuicao;
