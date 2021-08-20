import React from "react";
import arrowleft from '../../icons/arrowleft.svg';

import { Container  } from "./style";

const Barra: React.FC = () => {
    return(
        <Container>
        <img src={arrowleft}/>
        </Container>
    )
};

export default Barra;
