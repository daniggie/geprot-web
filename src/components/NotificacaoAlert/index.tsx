import React from "react";
import { Container } from "./style";

const NofiticacaoAlert: React.FC = () => {
  return (
    <>
    <Container>
      <div className="line">
        <b>Insira notificação</b>
        <p>Descrição pequena sobre a notificação</p>
      </div>
    </Container>
    </>
  )
};

export default NofiticacaoAlert;



