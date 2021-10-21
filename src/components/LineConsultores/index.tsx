import React from "react";
import { Container } from "./style";

interface consultor {
    id : number;
    horas: number;
}

const LineConsultor:React.FC<consultor> = ({id,horas}) => {
    return(
        <Container>
            <div className="column1 fonte_13">
                Ludicir Rodrigues
            </div>

            <div className="column2 fonte_13">
                90 H
            </div>
        </Container>
    );
}

export default LineConsultor;