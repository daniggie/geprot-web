import React, {useState} from 'react';
import { useParams } from 'react-router';
import api from '../../../services/api';
import { Container, ContainerAprovado } from './style';

const ButtonAprove: React.FC = () => {
  const { id }: {id:string} = useParams();
  const { consultorId }: {consultorId:string} = useParams();
  const token = localStorage.getItem("@Geprot:token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
    api.get(`horas/aprovar/${id}/${consultorId}`, config)
    return(
      <>
        <Container>
          <p>Aprovar horas</p>
        </Container>

        <ContainerAprovado>
          <p>Aprovado</p>
        </ContainerAprovado>

      </>
    );
};

export default ButtonAprove;
