import { useEffect, useState } from "react";
import React from "react";
import { CgSearchLoading } from "react-icons/cg";
import api from "../../../services/api";
import { Contant } from "./style";

interface Consultor {
  id: number,
  nome: string,
  demandas: number,
  fornecedor: {
    id: number,
    nome: string
  }
}

const Informations: React.FC = () => {
  const [ valores, setValores ] = useState<Consultor[]>([]);
  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      await api.get(`usuarios/listar/consultores`).then(response => {
        setValores(response.data);
      })
    }
    carregaDados();
  }, [ ])
  return (
    <>
    {
      valores.map(valor => (


    <Contant>
      <div className="columns">
      <div className="column1">
          <p className="helvetica light fonte_15 cor_0">{valor.id}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{valor.nome}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{valor.fornecedor.nome}</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> {valor.demandas} </p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0">
          <a href="/alocaratribuirfuncionario">
            <CgSearchLoading size={25} color="#0091BD"/>
          </a>
        </p>
      </div>
    </div>
    </Contant>
    ))
  }
  </>
  )
};

export default Informations;
