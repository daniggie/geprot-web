import React, {useState} from "react";
import { ContainerLido, ContainerAlert } from "./style";

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
      <div className="line" onClick={addOverlay}>
        <div className="title fonte_13 bold" >Titulo Alerta</div>
        <div className="text">Descrição pequena sobre a notificação</div>
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
    </ContainerAlert>

    <ContainerLido overlay={overlay}>
      <div className="line" onClick={addOverlay}>
        <div className="title fonte_13 bold" >Titulo Lido</div>
        <div className="text">Descrição pequena sobre a notificação</div>
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
    </ContainerLido>
    </>
  )
};

export default NofiticacaoAlert;



