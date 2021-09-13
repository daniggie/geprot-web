import React, {useState} from 'react';
import { useParams } from 'react-router';
import api from '../../../services/api';
import { Container } from './style';

const BotaoAvancar: React.FC = () => {
  const { id }: {id:string} = useParams();
  const { consultorId }: {consultorId:string} = useParams();
    api.get(`aprovar/${id}/${consultorId}`)
    return(
        <Container>
              <p>Aprovar horas</p>
        </Container>
    );
};

export default BotaoAvancar;
