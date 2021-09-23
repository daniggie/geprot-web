import React from "react";
import { Container } from "./style";

const NofiticacaoAlert: React.FC = () => {
  return (
    <>
    <Container>
      <div className="line">
        <div className="title fonte_13 bold" >Titulo descrição</div>
        <div className="a">Descrição pequena sobre a notificação</div>
      </div>
    </Container>
    </>
  )
};

export default NofiticacaoAlert;



