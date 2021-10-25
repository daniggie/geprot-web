import React, { useState, FormEvent } from 'react';
import { All, Container } from './styles';
import { Form } from "@unform/web";
import Header from '../../../components/Header';
import ButtonRegister from '../../../components/Buttons/ButtonRegister';
import Menu from '../../../components/Menu';
import ButtonCancel from '../../../components/Buttons/ButtonCancel';
import { RiAddLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import { BiReceipt } from 'react-icons/bi';

const Cadastro:React.FC = () => {
  return( 
    <>
      <Header/>

      <All>
        <div className="title">
          <b className="helvetica fonte_20 cor_5">CADASTRO DE PROJETO</b>
        </div>
        <Container>
          <form>
            <div className="column">
              <div className="line">
                  <div className="download">
                    <p className="helvetica fonte_13 cor_0 bold">ATA_COMISSÃO_001</p>
                    <BiReceipt color="#00579D" size={25}/>
                  </div>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do projeto:</p>
                <input name="nomeProjeto" id="nomeProjeto" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do solicitante:</p>
                <input name="nomeSolicitante" id="nomeSolicitante" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do responsável:</p>
                <input name="nomeResponsavel" id="nomeResponsavel" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Data de inicio:</p>
                  <input type="date"  id="dataInicio"/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Data de encerramento:</p>
                  <input type="date" id="dataFinalizacao" />
                </div>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Descrição</p>
                <textarea id="descricao" className="helvetica"></textarea>
              </div>
            </div>

            <div className="column">
              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Consultor:</p>
                  <input id="idConsultor" type="number" placeholder="Digite o ID..."/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Horas:</p>
                  <input id="horasConsultor" type="number" placeholder="1" />
                  <div className="boxAdd cor_6f" >
                    <RiAddLine color="#fff"/>
                  </div>
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

                <div className="columns helvetica cor_0 lighter" >
                  <div className="column3">
                    <div className="boxEx cor_6f">
                      <FiX color="#fff"/>
                    </div>
                  </div>
                  <div className="column1">  
                  </div>
                  <div className="column2">  
                  </div>
                </div>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Centro de Custo:</p>
                  <input id="idConsultor" type="number" placeholder="Digite o ID..."/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Percentual Aprovado:</p>
                  <input id="horasConsultor" type="number" placeholder="%" />
                  <div className="boxAdd cor_6f" >
                    <RiAddLine color="#fff"/>
                  </div>
                </div>
              </div>

              <div className="table">

              <div className="header">
                <div className="title1 bold helvetica cor_0 fonte_15">
                  Centro de custo
                </div>
                <div className="title1 bold helvetica cor_0 fonte_15">
                    Percentual
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="boxEx cor_6f">
                    <FiX color="#fff"/>
                  </div>
                </div>
                <div className="column2"></div>
              </div>
            </div>
            </div>
          </form>
        </Container>
      <Menu/>
    </All>
  </>
  );
};

export default Cadastro;