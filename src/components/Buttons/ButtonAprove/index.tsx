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

   async function apenas() {
    alert("chegou")
    await api.put(`horas/aprovar/${id}/${consultorId}`, config)

  }

    return(
      <>
        <Container onClick={apenas}>
          <p>Aprovar horas</p>
        </Container>
      </>
    );
};

export default ButtonAprove;
