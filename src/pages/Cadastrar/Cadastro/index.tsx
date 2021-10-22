import React, { useState, FormEvent } from 'react';
import { All } from './styles';
import { Form } from "@unform/web";
import Header from '../../../components/Header';
import ButtonRegister from '../../../components/Buttons/ButtonRegister';
import Menu from '../../../components/Menu';
import ButtonCancel from '../../../components/Buttons/ButtonCancel';
import { RiAddLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';

const Cadastro:React.FC = () => {
  return( 
    <>
      <Header/>

      <All>
        <div className="title">
          <b className="helvetica fonte_20 cor_5">CADASTRO DE PROJETO</b>
        </div>
        <form>
          <div className="column">
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
              <div>
                <p className="helvetica fonte_15 cor_5 bold">Data de inicio:</p>
                <input type="date"  id="dataInicio"/>
              </div>
              <div>
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
              <div>
                <p className="helvetica fonte_15 cor_5 bold">Consultor:</p>
                <input id="idConsultor" type="number" placeholder="Digite o ID..."/>
              </div>
              <div>
                <p className="helvetica fonte_15 cor_5 bold">Horas:</p>
                <input id="horasConsultor" type="number" placeholder="1" />
                <div className="box cor_6f" >
                  <RiAddLine color="#fff"/>
                </div>
              </div>
            </div>

            <div className="line">
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
                    <div className="box cor_6f">
                      <FiX color="#fff"/>
                    </div>     
                  </div>
                  <div className="column1">  
                  </div>
                  <div className="column2">  
                  </div>
                </div>
              </div>
            </div>

            <div className="line">
              <div>
                <p className="helvetica fonte_15 cor_5 bold">Centro de Custo:</p>
                <input id="idConsultor" type="number" placeholder="Digite o ID..."/>
              </div>
              <div>
                <p className="helvetica fonte_15 cor_5 bold">Percentual Aprovado:</p>
                <input id="horasConsultor" type="number" placeholder="%" />
                <div className="box cor_6f" >
                  <RiAddLine color="#fff"/>
                </div>
              </div>
            </div>
          </div>

          <div className="position">
            <ButtonCancel/>
            <ButtonRegister type="submit">Cadastrar</ButtonRegister>
          </div>
        </form>
      <Menu/>
    </All>
  </>
  );
};

export default Cadastro;