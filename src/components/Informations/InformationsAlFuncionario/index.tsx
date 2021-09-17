import React, { useState } from "react";
import { Contant } from "./style";
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
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`projetos/naoalocados/${id}`,config).then(response => {
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
        <Atribuicao projetos_id={valor.id} usuarios_id={id}/>
      </div>

    </div>

    </Contant>


    ))
    }


  </>
  )
};

export default Informations;
