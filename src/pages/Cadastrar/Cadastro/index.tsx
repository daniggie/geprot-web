import React, { useState, FormEvent, useRef, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useToast } from '../../../hooks/toast';
import { Form } from "@unform/web";
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import { FormHandles } from '@unform/core';
import * as Yup from "yup";

import { All, Container } from './styles';
import { FiX } from 'react-icons/fi';
import { RiAddLine } from 'react-icons/ri';
import { BiReceipt } from 'react-icons/bi';
import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';
import InputRegister from '../../../components/InputRegister';
import ButtonRegister from '../../../components/Buttons/ButtonRegister';

interface NomeConsultor {
  id: number;
  usuario: {
    nome: string;
  }
}
 
interface Consultor {
  id: number;
  nome: string;
  horas: string;
}

interface Secao {
  id: number;
  nome: string;
  taxa: number;
}

interface Projeto {
  nome: string;
  nomeSolicitante: string;
  descricao: string;
  dataFinalizacao: string;
  dataInicio: string;
  nomeResponsavel: string;
  consultores: {
      consultorId: number;
      quantidadeHoras: number;
  }
  ccpagantes:{
      secaoId: number;
      taxa: number;
  }
}

const Cadastro:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const projeto = {
    nome: "",
    nomeSolicitante: "",
    descricao:"",
    dataFinalizacao: "",
    dataInicio: "",
    nomeResponsavel:"",
    consultores:{
      consultorId: 0,
      quantidadeHoras: 0
    },
    ccpagantes:{
      secaoId: 1,
			taxa: 100
    }
  }

  const cadastrarProjeto = useCallback( async(data: Projeto) => {
    try{
      formRef.current?.setErrors({})

      projeto.nome = (document.getElementById('nomeProjeto') as HTMLInputElement).value;
      projeto.nomeSolicitante = (document.getElementById('nomeSolicitante') as HTMLInputElement).value;
      projeto.descricao = (document.getElementById('descricao') as HTMLInputElement).value;
      projeto.dataFinalizacao = (document.getElementById('dataFinalizacao') as HTMLInputElement).value;
      projeto.dataInicio = (document.getElementById('dataInicio') as HTMLInputElement).value;
      projeto.nomeResponsavel = (document.getElementById('nomeResponsavel') as HTMLInputElement).value;
      projeto.consultores.consultorId = parseInt((document.getElementById('idConsultor') as HTMLInputElement).value);
      projeto.consultores.quantidadeHoras = parseInt((document.getElementById('horasConsultor') as HTMLInputElement).value);
      projeto.ccpagantes.secaoId = parseInt((document.getElementById('idCentroCusto') as HTMLInputElement).value);
      projeto.ccpagantes.taxa = parseInt((document.getElementById('porcentagem') as HTMLInputElement).value);

      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}`},
      };

      const schema = Yup.object().shape({
        nomeProjeto: Yup.string()
        .required("O nome do projeto é obrigatório"),
        nomeSolicitante:Yup.string()
        .required("O nome do solicitante é obrigatório"),
        nomeResponsavel:Yup.string()
        .required("O nome do responsável é obrigatório"),
        descricao: Yup.string()
        .required("A descrição é obrigatória"),
        dataFinalizacao: Yup.date()
        .required("A data é obrigatória"),
        dataInicio: Yup.date()
        .required("A data é obrigatória"),
        idConsultor: Yup.number()
        .required("O ID é obrigatório"),
        horasConsultor: Yup.number()
        .required("A hora é obrigatória"),
        idCentroCusto: Yup.number()
        .required("O ID é obrigatório"),
        porcentagem: Yup.number()
        .required("A porcentagem é obrigatória"),
      })

      await schema.validate(data, {
        abortEarly: false,
      })  

      await api.post("/projetos/cadastrar", projeto, config);

      addToast({
        type: "success",
        title:"Cadastro realizado",
        description:"Projeto cadastado com sucesso!"
      })

      history.push('/home')

    }
    catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return
      }

      addToast({
        type:"error",
        title:"Erro no cadastro",
        description:"Ocorreu um erro ao realizar o cadastro. Tente novamente!"
      })
    }
  }, [addToast, history]);

  return( 
    <>
      <Header/>

      <All>
        <div className="title">
          <b className="helvetica fonte_20 cor_5">CADASTRO DE PROJETO</b>
        </div>
        <Container>
          <Form ref={formRef} onSubmit={cadastrarProjeto}>
            <div className="column">
              <div className="line">
                  <label>
                    <p className="helvetica fonte_13 cor_0 bold">
                      ATA_COMISSÃO_001
                      <input type="file" size={0}/>
                    </p>
                    <BiReceipt color="#00579D" size={25}/>
                  </label>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do projeto:</p>
                <InputRegister name="nomeProjeto" id="nomeProjeto" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do solicitante:</p>
                <InputRegister name="nomeSolicitante" id="nomeSolicitante" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do responsável:</p>
                <InputRegister name="nomeResponsavel" id="nomeResponsavel" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Consultor:</p>
                  <InputRegister id="idConsultor" name="idConsultor" type="number" placeholder="Digite o ID..."/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Horas:</p>
                  <InputRegister id="horasConsultor" name="horasConsultor" type="number" placeholder="1" />
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
            </div>

            <div className="column">
              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Data de inicio:</p>
                  <InputRegister type="date" name="dataInicio" id="dataInicio"/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Data de encerramento:</p>
                  <InputRegister type="date" name="dataFinalizacao" id="dataFinalizacao" />
                </div>
              </div>

              <div className="lineDescricao">
                <p className="helvetica fonte_15 cor_5 bold">Descrição</p>
                <textarea id="descricao" className="helvetica"></textarea>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Centro de Custo:</p>
                  <InputRegister id="idCentroCusto" name="idCentroCusto" type="number" placeholder="Digite o ID..."/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Percentual Aprovado:</p>
                  <InputRegister id="porcentagem" name="porcentagem" type="number" placeholder="%" />
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
            <div className="line">
              <ButtonRegister type="submit">Cadastrar</ButtonRegister>
            </div>
          </Form>
        </Container>
      <Menu/>
    </All>
  </>
  );
};

export default Cadastro;