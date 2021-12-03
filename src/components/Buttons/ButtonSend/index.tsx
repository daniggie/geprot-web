import React, { ReactNode } from 'react';
import { useHistory } from 'react-router';
import {api} from "../../../services/api";

import { Container } from './style';
//Revisado 03/12/2021
interface ButtonProps {
    projetoId?: number,
    consultorId?: number,
    textoRecusar?: string,
    children?: ReactNode,
}

const ButtonSend: React.FC<ButtonProps> = (props) => {
    const horaReprovar = {
        motivo: props.textoRecusar
    }
    const token = localStorage.getItem("@Geprot:token");
    const history = useHistory();
    let config = {
      headers: { Authorization: `Bearer ${token}`},
    };
  
    async function sendMessage(): Promise<void> {
      await api.put(`horas/reprovar/${props.projetoId}/${props.consultorId}`,horaReprovar, config)
      history.push("/home")
    }

    return(
        <Container onClick={() => sendMessage()}>
            <p>Enviar</p>
        </Container>
    );
};

export default ButtonSend;
