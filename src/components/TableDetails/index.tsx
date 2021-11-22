import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "./styles";
import {api} from "../../services/api";

interface Secao {
  id: number;
  nome: string;
  valorPagante: number;
}

const ContDetails: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [ valor, setValor ] = useState<Secao[]>([]);

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
       api.get(`ccpagantes/buscar/${id}`, config).then(response => {
        setValor(response.data)
      })
    }
   carregaDados();
  }, [ ])
  console.log(valor)



  return(
    <>
      {
      valor.map(secao => (
      <Container>
        <p className=" table cor_1">{secao.nome}</p>
        <p className="table cor_1">R$ {secao.valorPagante}</p>
        <p className="table cor_1">{secao.id}</p>
      </Container>
      ))}
    </>
  )
};

export default ContDetails;
