import React, { ReactNode } from 'react';
import { useHistory } from 'react-router';

import { Container } from './style';

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

  async function apenas(): Promise<void> {
    history.push("/home")
  }

  return(
    <>
      <Container onClick={() => apenas()}>
        <p>Aprovar horas</p>
      </Container>
    </>
  );
};

export default ButtonAprove;
