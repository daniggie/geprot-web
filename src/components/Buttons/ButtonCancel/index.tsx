import React from 'react';

import { Container } from './style';
//Revisado 03/12/2021
const ButtonCancel: React.FC = () => {
  return(
    <Container>
      <a href="/home">
        <p className="helvetica lighter cor_0">Cancelar</p>
      </a>
    </Container>
  );
};

export default ButtonCancel;
