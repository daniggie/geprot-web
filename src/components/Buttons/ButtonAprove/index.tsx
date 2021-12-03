import React, { ReactNode } from 'react';
import { useHistory } from 'react-router';
import {api} from "../../../services/api";

import { Container } from './style';
//Revisado 03/12/2020

interface ButtonProps {
  projetoId?: number,
  consultorId?: number,
  children?: ReactNode,
}

const ButtonAprove: React.FC<ButtonProps> = (props) => {
  const token = localStorage.getItem("@Geprot:token");
  const history = useHistory();
  let config = {
    headers: { Authorization: `Bearer ${token}`},
  };

  async function aprovarHoras(): Promise<void> {
    await api.put(`horas/aprovar/${props.projetoId}/${props.consultorId}`,props, config)
    history.push("/home")
  }

  return(
    <>
      <Container onClick={() => aprovarHoras()}>
        <p>Aprovar horas</p>
      </Container>
    </>
  );
};

export default ButtonAprove;
