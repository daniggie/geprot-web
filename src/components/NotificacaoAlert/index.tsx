import React, {useState} from "react";
import { ContainerAlert } from "./style";
import { BiTrash } from "react-icons/bi";

const NofiticacaoAlert: React.FC = () => {

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
    <ContainerAlert overlay={overlay}>
      <div className="line cor_0f" >
        <div className="title fonte_13 bold" >Apontamento de horas resolvido</div>
        <div className="text" onClick={addOverlay}>[nome do funcionario] enviou suas horas</div>
        <div className="icon">
          <BiTrash color="#0075B1"/>
        </div>
      </div>

      <div className="details">
        <div className="overlay">
              <b className="fonte_14">Apontamento de horas resolvido</b>
              <p className="fonte_12">O funcionário [insira aqui nome do funcionario] reenviou suas horas.</p>
              <button onClick={addOverlay}>Ver</button>
        </div>
      </div>

    </ContainerAlert>
    </>
  )
};

export default NofiticacaoAlert;



