import React, {useState} from 'react';
import { useParams } from 'react-router';
import api from '../../../services/api';
import { Container, ContainerAprovado } from './style';
import { useHistory } from 'react-router';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';

interface ButtonProps {
  projetoId?: number
  consultorId?: number
  children?: ReactNode
}

const ButtonAprove: React.FC<ButtonProps> = (props) => {
  const token = localStorage.getItem("@Geprot:token");
  const history = useHistory();
  let config = {
    headers: { Authorization: `Bearer ${token}`},
  };

   async function apenas(): Promise<void> {
    await api.put(`horas/aprovar/${props.projetoId}/${props.consultorId}`, config).then(response => {console.log(response)}).
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
