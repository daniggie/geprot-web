import React from 'react';
import { Container } from './style';

const BotaoAvancar: React.FC = () => {
    return(
        <Container>
          <a href="/home">
             <p>Aprovar horas</p>
          </a>
        </Container>
    );
};

export default BotaoAvancar;
