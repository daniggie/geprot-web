import React, {useState} from 'react';
import { useParams } from 'react-router';
import api from '../../../services/api';
import { Container, ContainerAprovado } from './style';
import { useHistory } from 'react-router';
import { log } from 'console';

const ButtonAprove: React.FC = () => {
  const { id }: {id:string} = useParams();
  const { consultorId }: {consultorId:string} = useParams();
  const token = localStorage.getItem("@Geprot:token");
  const history = useHistory();
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

   async function apenas(): Promise<void> {
     console.log("aqui")
    console.log(`${id} ${consultorId}`)

    await api.put(`horas/aprovar/${id}/${consultorId}`, config).then(response => {console.log(response)}).
    catch(err => {
      console.log(err)
    })
    console.log("passou")
    history.push("/")

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
