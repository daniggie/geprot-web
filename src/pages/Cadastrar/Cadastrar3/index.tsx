import React, { useState }  from 'react';
import { Titulo, Formulario } from './style';
import BotaoFinalizar from '../../../components/Buttons/ButtonFinalizar';
import { BsFillCaretRightFill, BsX } from "react-icons/bs";
import { BiReceipt } from "react-icons/bi";
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory } from 'react-router';
import LineConsultor from '../../../components/LineConsultores';

const Cadastrar3: React.FC = () => {
  const projeto = {
    nome: "",
    nomeSolicitante: "",
    descricao:"",
    dataFinalizacao: "",
    dataInicio: "",
    nomeResponsavel:"",
    consultores: [ 
      {
        consultorId: 0,
        quantidadeHoras: 0
      }
    ],
    ccpagantes: [
      {
        secaoId: 1,
			  taxa: 100
      }
    ] 
  }



  const history = useHistory();

  const [projetoSalvo] = useState(() => {
    let projeto = localStorage.getItem('@Geprot:cadastrar');

    if (projeto) {
        let languageObject = JSON.parse(projeto);
        return languageObject;
      }
    });
  
    const Cadastrar = async () => {
      projeto.nome = projetoSalvo.nome;
      projeto.nomeResponsavel = projetoSalvo.nomeResponsavel;
      projeto.dataFinalizacao = projetoSalvo.dataFinalizacao;
      projeto.dataInicio = projetoSalvo.dataInicio;
      projeto.nomeSolicitante = projetoSalvo.nomeSolicitante;
      projeto.consultores =  projetoSalvo.consultores;
      projeto.ccpagantes = projetoSalvo.ccpagantes;
      projeto.descricao = (document.getElementById('descricao') as HTMLInputElement).value;

    try{
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.post("/projetos/cadastrar", projeto, config);
      history.push('/home');
    }catch(err){
      alert("Deu pau")
    }
  }



    return (
      <>
        <Header/>

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">Resumo</p>
        </Titulo>
        <Titulo>
          <a href="/cadastrar"><b className="helvetica fonte_15 cor_0">Cadastro de projetos</b></a>
          <BsFillCaretRightFill color="#828282"/>
          <a href="/cadastrar2"><b className="helvetica fonte_15 cor_0">Centro de custos</b></a>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Resumo </u> </b>
        </Titulo>
        <Formulario>
          <p className="helvetica fonte_25 cor_5 bold"> NOME DO PROJETO</p>
          <p className="helvetica fonte_20 cor_5 lighter">Seção X <b className="helvetica fonte_20 cor_0 lighter">000000</b></p>
          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_5 bold">Geral</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_5 bold">RESPONSÁVEL:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">Lara Hanna</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_5 bold">SOLICITANTE:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">Rodrigo Loudres</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_5 bold">PREVISÃO</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">13/05/2021 á 25/02/2022</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_5 bold">VERBA:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">R$    80.000,00</b>
              </div>
            </div>

            <div className="line">
              <b className="helvetica fonte_20 cor_5 bold">Centro de custos</b>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_5 bold">% </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00</b>
              </div>
            </div>


          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_5 bold">Descrição</b>
            </div>

            <textarea id="descricao" className="helvetica"></textarea>

            <div className="line">
              <div className="download">
                <p className="helvetica fonte_13 cor_0 bold">ATA_COMISSÃO_001</p>
                <BiReceipt color="#00579D" size={25}/>
              </div>
            </div>

            <div className="line">
              <div className="download">
                <p className="helvetica fonte_13 cor_0 bold">ATA_DG</p>
                <BiReceipt color="#00579D" size={25}/>
              </div>

            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_5 bold">Consultores</b>
            </div>

            <div className="table">

              <div className="header">

                <div className="title1 bold helvetica cor_0 fonte_15">
                  Consultor
                </div>

                <div className="title2 bold helvetica cor_0 fonte_15">
                  Horas
                </div>

              </div>

              < div className="th">
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
                <LineConsultor/>
              </div>
              
            </div>

          </div>

          <div className="position">
            <a onClick={Cadastrar} href="/home">
            <BotaoFinalizar />
            </a>
          </div>
        </Formulario>
      </>
    );
}
export default Cadastrar3;
