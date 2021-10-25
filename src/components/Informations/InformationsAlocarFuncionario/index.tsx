import React, { useState } from "react";
import { Contant } from "./style";
import { useParams } from "react-router";
import { useEffect } from "react"
import api from "../../../services/api";
import Atribuicao from "../../Atribuicao";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";


interface Projeto {
  id: number,
  nome: string,
  nomeResponsavel: string,
  dataCadastro: Date,
  allocated: boolean
}

interface PesquisaProps {
  pesquisarPorNome?: string,
  pesquisaPorNomeResponsavel?: string,
  pesquisaId?: string
  children?: ReactNode
}

const Informations: React.FC<PesquisaProps> = ({pesquisaPorNomeResponsavel, pesquisaId, pesquisarPorNome}: PesquisaProps) => {
  const { id }: {id:string} = useParams();
  const [ valores, setValores ] = useState<Projeto[]>([]);
  const token = localStorage.getItem("@Geprot:token");
  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');
    if (usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
      }
  });

  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function carregaDadosPadrao(): Promise<void> {
    await api.get(`projetos/alocados/${perfil.secao.id}/${id}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorNomeProjeto(): Promise<void> {
    await api.get(`projetos/alocados/nome/${perfil.secao.id}/${id}/${pesquisarPorNome}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorNomeResponsavel(): Promise<void> {
    await api.get(`projetos/alocados/nomeresponsavel/${perfil.secao.id}/${id}/${pesquisaPorNomeResponsavel}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorIdProjeto(): Promise<void> {
    await api.get(`projetos/alocados/id/${perfil.secao.id}/${id}/${pesquisaId}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorIdProjetoAndNomeProjeto(): Promise<void> {
    await api.get(`projetos/alocados/id/nome/${perfil.secao.id}/${id}/${pesquisaId}/${pesquisarPorNome}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorIdProjetoAndNomeResponsavel(): Promise<void> {
    await api.get(`projetos/alocados/id/nomeresponsavel/${perfil.secao.id}/${id}/${pesquisaId}/${pesquisaPorNomeResponsavel}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorNomeProjetoAndNomeResponsavel(): Promise<void> {
    await api.get(`projetos/alocados/nomeresponsavel/nome/${perfil.secao.id}/${id}/${pesquisaPorNomeResponsavel}/${pesquisarPorNome}`,config).then(response => {
      setValores(response.data)
    })
  }

  async function buscaPorNomeProjetoAndNomeResponsavelAndId(): Promise<void> {
    await api.get(`projetos/alocados/id/nomeresponsavel/nome/${perfil.secao.id}/${id}/${pesquisaId}/${pesquisaPorNomeResponsavel}/${pesquisarPorNome}`,config).then(response => {
      setValores(response.data)
    })
  }



  useEffect(() => {
    if (pesquisarPorNome === '' && pesquisaPorNomeResponsavel === '' && pesquisaId === '') {
      carregaDadosPadrao();
    }

    if (pesquisarPorNome !== '' && pesquisaPorNomeResponsavel === '' && pesquisaId === '') {
      buscaPorNomeProjeto();
    }

    if (pesquisarPorNome === '' && pesquisaPorNomeResponsavel !== '' && pesquisaId === '') {
      buscaPorNomeResponsavel();
    }

    if (pesquisarPorNome === '' && pesquisaPorNomeResponsavel === '' && pesquisaId !== '') {
      buscaPorIdProjeto();
    }

    if (pesquisarPorNome !== '' && pesquisaPorNomeResponsavel !== '' && pesquisaId === '') {
      buscaPorNomeProjetoAndNomeResponsavel();
    }

    if (pesquisarPorNome !== '' && pesquisaPorNomeResponsavel === '' && pesquisaId !== '') {
      buscaPorIdProjetoAndNomeProjeto();
    }

    if (pesquisarPorNome === '' && pesquisaPorNomeResponsavel !== '' && pesquisaId !== '') {
      buscaPorIdProjetoAndNomeResponsavel();
    }

    if (pesquisarPorNome !== '' && pesquisaPorNomeResponsavel !== '' && pesquisaId !== '') {
      buscaPorNomeProjetoAndNomeResponsavelAndId();
    }
  }, [pesquisarPorNome, pesquisarPorNome, pesquisaId])

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
        <Atribuicao projetoId={valor.id} consultorId={id}/>
      </div>

    </div>

    </Contant>


    ))
    }


  </>
  )
};

export default Informations;
