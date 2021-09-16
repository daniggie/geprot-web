import React, { useRef } from 'react';
import { Titulo, Formulario } from './style';
import { FormHandles } from '@unform/core';
import Barra from "../../../components/Barra";
import { RiAddLine } from 'react-icons/ri';


interface CadastraProjeto {
  nome: string;
  nomeSolicitante: string;
  dataFinalizacao: string;
	dataInicio: string;
	nomeResponsavel: string;
}

const Cadastrar: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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

    return (
      <>
        <Barra/ >

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE PROJETOS</p>
        </Titulo>
        <div>
          <Formulario>
            <div className="content">

              <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Nome do Projeto:</b>
              </div>

              <div className="line">
                  <input type="text" id="nome" placeholder="Digite aqui..." />
              </div>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Nome do solicitante:</b>
              </div>

              <div className="line">
                  <input type="text" id="nomeSolicitante" placeholder="Digite aqui..." />
              </div>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Nome do responsável:</b>
              </div>

              <div className="line">
                  <input type="text" placeholder="Digite aqui..." id="nomeResponsavel" />
              </div>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Data de inicio:</b>
                <b className="helvetica fonte_15 cor_3 bold">Data de encerramento:</b>
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
                  <b className="helvetica fonte_15 cor_3 bold">Consultor:</b>
                </div>

                <div className="lineText">
                  <b className="helvetica fonte_15 cor_3 bold">Horas:</b>
                </div>
              </div>

              <div className="line">
                <div className="tamanho">
                  <input type="number" placeholder="0"/>
                </div>
                <div className="tamanho">
                  <input type="number" placeholder="0" />
                </div>
                <div className="box cor_3f" >
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
