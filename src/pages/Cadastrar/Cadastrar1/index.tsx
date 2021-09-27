import React, { useRef, useState, FormEvent } from 'react';
import { Titulo, Formulario, Form } from './style';
import Barra from "../../../components/Barra";
import { RiAddLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import api from '../../../services/api';
import Header from '../../../components/Header';

interface CadastraProjeto {
  nome: string;
  nomeSolicitante: string;
  dataFinalizacao: string;
	dataInicio: string;
	nomeResponsavel: string;
}

interface NomeConsultor {
 nome: string; 
}

interface Consultor {
  id: number;
  nome: string;
  horas: string;
}

const Cadastrar: React.FC = (  ) => {
  const[newConsultor, setNewConsultor] = useState('');
  const[consultores, setConsultores] = useState<Consultor[]>([]);

  async function handleAddLine(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Consultor>(`repos/${newConsultor}`);
    const consultor = response.data;

    setConsultores([...consultores, consultor]);
    setNewConsultor('');
  }


  const projeto = {
    nome: "",
    nomeSolicitante: "",
    dataFinalizacao: "",
    dataInicio: "",
    nomeResponsavel:""
  }

  const teste = () => {
    projeto.nome = (document.getElementById('nome') as HTMLInputElement).value;
    projeto.nomeSolicitante = (document.getElementById('nomeSolicitante') as HTMLInputElement).value;
    projeto.nomeResponsavel = (document.getElementById('nomeResponsavel') as HTMLInputElement).value;
    projeto.dataFinalizacao = (document.getElementById('dataFinalizacao') as HTMLInputElement).value;
    projeto.dataInicio = (document.getElementById('dataInicio') as HTMLInputElement).value;
    console.log(JSON.stringify(projeto))
    localStorage.setItem('@Geprot:cadastra',JSON.stringify(projeto));
  }

  const adcionarListaConsultor = () => { 

    const idConsultor = (document.getElementById('idConsultor') as HTMLInputElement).value;

    const pegaNome = async () => {
      alert("comeco")
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      alert("passou")

      const response = await api.get<NomeConsultor>(`/usuarios/buscar/${idConsultor}`,config);
      console.log(response)
      const consultor = response.data;
      alert("chegou")

      const card:Consultor = {
        id: parseInt(idConsultor),
        nome: consultor.nome,
        horas: (document.getElementById('horasConsultor') as HTMLInputElement).value
      }
      setConsultores([...consultores, card])
    }
    pegaNome();

  };

  return (
    <>
      <Header/>

      <Titulo>
        <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE PROJETOS</p>
      </Titulo>

      <div>
        <Formulario>
          <div className="content">

            <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Nome do Projeto:</b>
            </div>

            <div className="line">
              <input type="text" id="nome" placeholder="Digite aqui..." />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Nome do solicitante:</b>
            </div>

            <div className="line">
              <input type="text" id="nomeSolicitante" placeholder="Digite aqui..." />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Nome do responsável:</b>
            </div>

            <div className="line">
              <input type="text" placeholder="Digite aqui..." id="nomeResponsavel" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Data de inicio:</b>
              <b className="helvetica fonte_15 cor_5 bold">Data de encerramento:</b>
            </div>

            <div className="line">
              <div className="tamanhoDate">
                <input type="date"  id="dataInicio"/>
              </div>
              <div className="tamanhoDate">
                <input type="date" id="dataFinalizacao" />
              </div>
            </div>

          </div>

          <Form>

            <p className="helvetica fonte_20 cor_5 bold">CONSULTORES</p>

            <div className="line">
              <div className="lineText">
                <b className="helvetica fonte_15 cor_5 bold">Consultor:</b>
              </div>

              <div className="lineText">
                <b className="helvetica fonte_15 cor_5 bold">Horas:</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <input id="idConsultor" type="number" placeholder="Digite o ID" />
              </div>
              <div className="tamanho">
                <input id="horasConsultor" type="number" placeholder="0" />
              </div>
              <div className="box cor_6f" >
                <RiAddLine color="#fff" onClick={adcionarListaConsultor}/>
              </div>
            </div>

            <div className="table">
              <div className="header">
                <div className="title3 bold helvetica cor_0 fonte_15">
                  ID
                </div>
                <div className="title1 bold helvetica cor_0 fonte_15">
                  Consultor
                </div>
                <div className="title2 bold helvetica cor_0 fonte_15">
                 Limite de horas
                </div>
              </div>
            </div>

            <div className="columns helvetica cor_0 lighter" >
              {consultores.map(consultor => (
                <div className="column3">
                  <div className="box cor_6f">
                    <FiX color="#fff"/>
                    <div>{consultor.id}</div>
                  </div>
                  <div className="column1">
                    {consultor.nome}
                  </div>
                  <div className="column2">
                    {consultor.horas}
                  </div>
                </div>
              ))}
            </div>
          </Form>

          <div className="position">
            <span onClick={teste}>
              <a href="/cadastrar2">
                <div className="button">
                  <p className="helvetica fonte_20 bold">Próximo</p>
                </div>
              </a>
            </span>
          </div>
        </Formulario>
      </div>
    </>
  );
}
export default Cadastrar;
