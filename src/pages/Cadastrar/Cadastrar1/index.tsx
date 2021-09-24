import React, { useRef, useState } from 'react';
import { Titulo, Formulario } from './style';
import { FormHandles } from '@unform/core';
import Barra from "../../../components/Barra";
import { RiAddLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import internal from 'stream';

interface CadastraProjeto {
  nome: string;
  nomeSolicitante: string;
  dataFinalizacao: string;
	dataInicio: string;
	nomeResponsavel: string;
}

const Cadastrar: React.FC = (  ) => {
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

  const consultores = {
    id: BigInt,
    nome: String,
    horas: BigInt
  }

  consultores: [
    [1, "userTeste", 80],
    [2, "userTeste", 80],
    [3, "userTeste", 80],
    [4, "userTeste", 80],
    [5, "userTeste", 80],
    [6, "userTeste", 80],
  ];

const [consultor, setConsultor] = useState(false);
const addConsultor = () => {
  for(let x = 0; x < 5; x++){
    if(!consultor){
      setConsultor(true)
    }else{
      setConsultor(true)
    }
  }

  return consultor;
}

  const removeConsultor = () => {
    if(!consultor){
      setConsultor(false)
    }else{
      setConsultor(false)
    }
    return consultor;
  }

    return (
      <>
        <Barra/ >

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE PROJETOS</p>
        </Titulo>
        <div>
          <Formulario consultorColumn={consultor}>
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

            <div className="content">

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
                  <input type="number" placeholder="0" />
                </div>
                <div className="tamanho">
                  <input type="number" placeholder="0" />
                </div>
                <div className="box cor_6f" onClick={addConsultor}>
                  <RiAddLine color="#fff"/>
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

                <div className="columns helvetica cor_0 lighter" id="1">
                  <div className="column3">
                    <div className="box cor_6f" onClick={removeConsultor}>
                      <FiX color="#fff"/>
                    </div>
                    {consultores.id}
                  </div>

                  <div className="column1">
                  {consultores.nome}
                  </div>

                  <div className="column2">
                  {consultores.horas}
                  </div>
                </div>

                </div>
              </div>
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
