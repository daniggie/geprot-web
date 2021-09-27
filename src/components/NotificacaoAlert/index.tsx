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
      <div className="line cor_0f" onClick={addOverlay}>
        <div className="title fonte_13 bold" >Titulo Alerta</div>
        <div className="text">Descrição pequena sobre a notificação</div>
        <div className="icon">
          <BiTrash color="#0075B1"/>
        </div>
      </div>

      <div className="details">
        <div className="overlay">
              <b className="fonte_14">Titulo Alerta</b>
              <p className="fonte_12">Descrição completa sobre a notificação abordada
              Descrição completa sobre a notificação abordada
              Descrição completa sobre a notificação abordada
              Descrição completa sobre a notificação abordada</p>
              <button onClick={addOverlay}>Ok</button>
        </div>
      </div>

      <div className="line cor_000f" onClick={addOverlay}>
        <div className="title fonte_13 bold" >Titulo Lido</div>
        <div className="text">Descrição pequena sobre a notificação</div>
        <div className="icon">
          <BiTrash color="#0075B1"/>
        </div>
      </div>

      <div className="details">
        <div className="overlay">
              <b className="fonte_14">Titulo lido</b>
              <p className="fonte_12">Descrição completa sobre a notificação abordada
              Descrição completa sobre a notificação abordada
              Descrição completa sobre a notificação abordada
              Descrição completa sobre a notificação abordada</p>
              <button onClick={addOverlay}>Ok</button>
        </div>
      </div>
    </ContainerAlert>
    </>
  )
};

export default NofiticacaoAlert;



