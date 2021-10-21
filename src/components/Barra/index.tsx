import React from "react";

import { Container  } from "./style";
import { FiArrowLeft } from "react-icons/fi"

const Barra: React.FC = () => {
  return(
    <Container>
      <a href="javascript: history.go(-1)">
        <FiArrowLeft/>
      </a>
    </Container>
  )
};

export default Barra;
