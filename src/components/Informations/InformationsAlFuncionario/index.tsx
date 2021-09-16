import React, { useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import { Contant } from "./style";
import arrowleft from "../../../icons/arrowleft.svg";
import { useParams } from "react-router";
import { useEffect } from "react"
import api from "../../../services/api";
import Atribuicao from "../../Atribuicao";


interface Projeto {
  id: number,
  nome: string,
  nomeResponsavel: string,
  dataCadastro: Date,

}
const Informations: React.FC = () => {

  const { id }: {id:string} = useParams();
  const [ valores, setValores ] = useState<Projeto[]>([]);

  useEffect(() => {
    async function carregaDados(): Promise<void> {
      await api.get(`projetos/naoalocados/${id}`).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [])

  return (

    <>
    {
      valores.map(valor => (


    <Contant >
      <div className="columns">
      <div className="column1">
          <p className="helvetica light fonte_15 cor_0">{valor.id}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{valor.nome}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{valor.nomeResponsavel}</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> {valor.dataCadastro} </p>
      </div>

      <div className="column1">
        <Atribuicao />
      </div>

    </div>

    </Contant>


    ))
    }


  </>
  )
};

export default Informations;
