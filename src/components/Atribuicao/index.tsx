import React, { useState } from "react";
import { Container } from "./style";
import arrowleft from "../../icons/arrowleft.svg";
import { RiCheckLine } from "react-icons/ri";
import api from "../../services/api";

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
  function Alocar(usuarios_id: number, projetos_id: number) {
    console.log("bomdia")
    const alocarHoras = {
      usuarios_id: 0,
      projetos_id: 0,
      limiteHoras: 0,
    }

    alocarHoras.projetos_id = projetos_id;
    alocarHoras.usuarios_id = usuarios_id;
    alocarHoras.limiteHoras = parseInt((document.getElementById('inputLegal') as HTMLInputElement).value);

    console.log(alocarHoras)
    api.post(`consultores/alocar`, JSON.stringify(alocarHoras), {headers: {
      "Content-Type": "application/json"}})
  }


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
            <input id="inputLegal" placeholder="0H" type="number"/>
            <button onClick={() => Alocar(parseInt(usuarios_id), projetos_id)}><RiCheckLine size={ 25 } color="#fff"/></button>


        </div>
      </div>
    </Container>


    </>
  )
};

export default Atribuicao;
