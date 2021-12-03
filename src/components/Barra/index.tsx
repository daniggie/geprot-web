import React from "react";

import { Container  } from "./style";
import { VscChevronLeft } from "react-icons/vsc"

//Revisado 03/12/2020
const Barra: React.FC = () => {
  return(
    <Container>
      <a href="javascript: history.go(-1)">
        <VscChevronLeft size={40} color="#00579D"/>
      </a>
    </Container>
  )
};

export default Barra;
