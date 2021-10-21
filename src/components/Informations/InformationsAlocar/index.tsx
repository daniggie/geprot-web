import { useEffect, useState } from "react";
import React from "react";
import { CgSearchLoading } from "react-icons/cg";
import api from "../../../services/api";
import { Contant } from "./style";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";

interface Consultor {
  id: number,
    nome: string;
  fornecedor: {
    id: number,
    nome: string
  },
  quantidade_projetos_alocado: number
}

interface PesquisaProps {
  pesquisarPorNome?: string,
  pesquisaPorNomeFornecedor?: string,
  pesquisaId?: string
  children?: ReactNode
}

const Informations: React.FC = ({pesquisaId, pesquisaPorNomeFornecedor, pesquisarPorNome}: PesquisaProps) => {
  const [ consultores, setConsultores ] = useState<Consultor[]>([]);
  const token = localStorage.getItem("@Geprot:token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  async function buscarTodosConsultores(): Promise<void>  {
    await api.get(`consultor/listar`,config).then(response => {
      setConsultores(response.data);
    })
  }

  async function buscarConsultoresPorId(): Promise<void>  {
    await api.get(`consultor/buscar/${pesquisaId}`,config).then(response => {
      setConsultores(response.data);
    })
  }

  async function buscarConsultoresPorNome(): Promise<void>  {
    await api.get(`consultor/buscar/${pesquisarPorNome}`,config).then(response => {
      setConsultores(response.data);
    })
  }

  async function buscarConsultoresPorNomeFornecedor(): Promise<void>  {
    await api.get(`consultor/buscar/${pesquisaPorNomeFornecedor}`,config).then(response => {
      setConsultores(response.data);
    })
  }
  useEffect(() => {
    if (pesquisarPorNome === '' && pesquisaPorNomeFornecedor === '' && pesquisaId !== '') {
      buscarConsultoresPorId()
    }

    if (pesquisarPorNome !== '' && pesquisaPorNomeFornecedor === '' && pesquisaId === '') {
      buscarConsultoresPorNome()
    }

    if (pesquisarPorNome === '' && pesquisaPorNomeFornecedor !== '' && pesquisaId === '') {
      buscarConsultoresPorNome()
    }

    buscarTodosConsultores();
  }, [pesquisarPorNome, pesquisaPorNomeFornecedor, pesquisaId])
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
