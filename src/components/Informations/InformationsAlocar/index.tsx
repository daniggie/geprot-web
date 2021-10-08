import { useEffect, useState } from "react";
import React from "react";
import { CgSearchLoading } from "react-icons/cg";
import api from "../../../services/api";
import { Contant } from "./style";

interface Consultor {
  id: number,
    nome: string;
  fornecedor: {
    id: number,
    nome: string
  },
  quantidade_projetos_alocado: number
}

const Informations: React.FC = () => {
  const [ consultores, setConsultores ] = useState<Consultor[]>([]);
  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`consultor/listar`,config).then(response => {
        setConsultores(response.data);
      })
    }
    carregaDados();
  }, [ ])
  console.log(consultores)
  const link = "/alocaratribuirfuncionario/"
  return (
    <>
    {consultores.map(consultor => (
    <Contant key={consultor.id}>
      {console.log(consultor)}

      <div className="columns">
      <div className="column1">
          <p className="helvetica light fonte_15 cor_0">{consultor.id}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{consultor.nome}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{consultor.fornecedor.nome}</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> {consultor.quantidade_projetos_alocado} </p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0">
          <a href={link + consultor.id}>
            <CgSearchLoading size={25} color="#00579D"/>
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
