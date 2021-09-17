import React from 'react';
import { Container } from './style';

const BotaoCancel: React.FC = () => {
    return(
        <Container>
          <a href="/home">
          <p className="helvetica lighter cor_0">Cancelar</p>
          </a>
        </Container>
    );
};

export default BotaoCancel;
