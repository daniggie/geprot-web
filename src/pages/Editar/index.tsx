import React, { useEffect, useRef, useState } from "react";
import { Titulo, Formulario } from './style';

import Barra from "../../components/Barra";
import BotaoSalvar from '../../components/Buttons/ButtonSalvar';
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import { FiX } from 'react-icons/fi';
import { RiAddLine } from 'react-icons/ri';
import { Link, useHistory, useParams } from "react-router-dom";
import { api } from "../../services/api";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  horasPrevistas: number,
  valor: number,
  dataFinalizacao: string
}

const Editar2: React.FC = () => {
  const { id }: {id:string} = useParams();
  const history = useHistory();
  const [ projeto, setProjeto ] = useState<Projeto>();
  const [ nomeAtualizar, setNomeAtualizar ] = useState("");
  const [ descricaoAtualizar, setDescricaoAtualizar ] = useState("")
  const [ dataAtualizar, setDataAtualizar ] = useState("")
  const [ horasTotaisAtualizar, setHorasTotaisAtualizar ] = useState("")
  const [ valorAtualizar, setValorAtualizar ] = useState("")

  const token = localStorage.getItem("@Geprot:token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  

  useEffect(() => {
    async function buscarDadosIniciais(): Promise<void> {
      await api.get(`projetos/buscar/${id}`, config).then(response => {
        setProjeto(response.data)
      })
    }

    buscarDadosIniciais()
  }, [])

  async function handleEditarProjeto() {
    const projetoEditar = {
      nome: nomeAtualizar,
      descricao: descricaoAtualizar,
      dataEncerramento: dataAtualizar,
      horasAprovadas: horasTotaisAtualizar,
      verbasAprovadas: valorAtualizar,
      consultores: null
    }

    async function editarProjeto(): Promise<void>  {
      await api.put(`/projetos/editar/${id}`, projetoEditar, config)
    }

    editarProjeto()

    history.push('/home')
  }

  const firstRenderRef = useRef(true);

  useEffect(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
        return;
      }
      
      setNomeAtualizar(projeto?.nome ? projeto.nome : "Deu ruim")
      setDescricaoAtualizar(projeto?.descricao ? projeto.descricao : "Deu ruim");
      setDataAtualizar(projeto?.dataFinalizacao ? projeto.dataFinalizacao : "10/10/2020")
      setValorAtualizar(projeto?.valor ? projeto.valor.toString() : "a");
      setHorasTotaisAtualizar(projeto?.horasPrevistas ? projeto.horasPrevistas.toString() : "999")
    }, [projeto?.nome, ]);

  const [ abrirSkills, setAbrirSkills ] = useState(true);
  const abreSkills = () => {
    if(!abrirSkills){
     setAbrirSkills(true);
    }else{
      setAbrirSkills(false);
    }

    return abrirSkills;
  };

  return(
    <>
      <Barra />

      <Titulo>
        <p className="helvetica fonte_20 cor_5 bold">EDITAR PROJETO</p>
      </Titulo>

      <Formulario popup={abrirSkills}>

        {/*Coluna 1*/}
        <div className="content">
          <div className="line">
            <b className="helvetica fonte_15 cor_5 bold">Nome do projeto:</b>
          </div>

          <div className="line">
            {/*Chamar informação value da API */}
              <input type="text" value={nomeAtualizar} onChange={event => setNomeAtualizar(event.target.value)} />
          </div>

          <div className="line">
            <b className="helvetica fonte_15 cor_5 bold">Descrição do projeto:</b>
          </div>

          <div className="line">
            <div className="box">
              {/*Chamar informação da API */}
              <textarea value={descricaoAtualizar} onChange={event => setDescricaoAtualizar(event.target.value)} cols={40}>

              </textarea>
            </div>
          </div>

          <div className="line">
            <b className="helvetica fonte_15 cor_5 bold">Data de encerramento:</b>
          </div>

          <div className="line">
            {/*Chamar informação value da API */}
              <input type="date" value={dataAtualizar} onChange={event => setDataAtualizar(event.target.value)} />
          </div>
        </div>

        {/*Coluna 2*/}

        <div className="content">
          <div className="line">
            <div className="float">
              <b className="helvetica fonte_15 cor_5 bold">Horas totais aprovadas:</b>
            </div>

            <div className="float">
              <b className="helvetica fonte_15 cor_5 bold">Verbas totais aprovadas:</b>
            </div>
          </div>

          <div className="line">
            <div className="float">
              {/*Chamar informação value da API */}
              <input type="number" value={horasTotaisAtualizar} onChange={event => setHorasTotaisAtualizar(event.target.value)} />
            </div>

            <div className="float">
              {/*Chamar informação value da API */}
              <input type="text" value={valorAtualizar} />
            </div>
          </div>

          {/*Tabela para adicionar consultores*/}
          <div className="line">
            <div className="float">
              <p className="helvetica fonte_15 cor_5 bold">Consultor:</p>
            </div> 

            <div className="float">
              <p className="helvetica fonte_15 cor_5 bold">Horas:</p>
            </div>
          </div>

          <div className="line">
            <div className="float">
              {/*Chamar informação value Consultor da API */}
              <input type="text" value="" />
            </div> 

            <div className="floatBox">
              {/*Chamar informação value Horas da API */}
              <input type="number" value="" />

              <div className="boxAdd cor_6f" onClick={abreSkills}>
                <RiAddLine color="#fff"/>
              </div>
            </div>
            
          </div>

          <div id="popup" className="popup">
            <div id="barra" onClick={abreSkills}></div>
			      <p>Skilss do consultor</p>
            <div className="columns helvetica cor_0 lighter" >
              <div className="column1">
                <input type="checkbox" id="vehicle1" name="vehicle1" value=""/>
                <label></label>
              </div>
            </div>
		      </div>
              
          <div className="contentTable">
            <div className="table">
            <div className="header">
                  <div className="title3 bold helvetica cor_0 fonte_15">
                    Consultor
                  </div>
                  <div className="title1 bold helvetica cor_0 fonte_15">
                    Habilidade
                  </div>
                  <div className="title2 bold helvetica cor_0 fonte_15">
                    Horas
                  </div>
                </div>
                
                <div className="columns helvetica cor_0 lighter" >
                  <div className="column3">
                    <div className="boxEx cor_6f" >
                      <FiX color="#fff"/>
                    </div>
                  </div>

                  <div className="column1">
                    {/*Chamar informação da API */}
                  </div>

                  <div className="column2">
                    {/*Chamar informação da API */}
                  </div>

                  </div>
                </div>
            </div>
              
        </div>


        <div className="position">

          <a href="/home">
            <BotaoCancel />
          </a>

            <div className="botaoSalvar" onClick={() => handleEditarProjeto()}>
              <p> Salvar </p>
            </div>
        </div>

      </Formulario>
    </>
  )
}

export default Editar2;
