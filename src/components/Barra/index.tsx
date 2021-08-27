import React from "react";
import arrowleft from '../../icons/arrowleft.svg';

import { Container  } from "./style";

const Barra: React.FC = () => {
    return(
        <Container>
          <a href="javascript: history.go(-1)">
            <img src={arrowleft}/>
          </a>

        </Container>
    )
};

export default Barra;
