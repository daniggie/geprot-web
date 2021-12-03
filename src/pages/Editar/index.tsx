import React, { useState } from "react";
import { Titulo, Formulario } from './style';

import Barra from "../../components/Barra";
import BotaoSalvar from '../../components/Buttons/ButtonSalvar';
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import { FiX } from 'react-icons/fi';
import { RiAddLine } from 'react-icons/ri';

const Editar2: React.FC = () => {
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
              <input type="text" value="" />
          </div>

          <div className="line">
            <b className="helvetica fonte_15 cor_5 bold">Descrição do projeto:</b>
          </div>

          <div className="line">
            <div className="box">
              {/*Chamar informação da API */}
              <textarea cols={40}>Reduzir a atividade manual da equipe interna WEC na entrada de
                      ordens de venda (OV), envio da confirmação e aviso de remessa
                      ao Cliente XYZ USA. Atender solicitação do cliente para automatizar o envio de pedidos e atualização do próprio sistema
                      através do EDI. O Cliente já
                      implementou este sistema nos principais fornecedores. </textarea>
            </div>
          </div>

          <div className="line">
            <b className="helvetica fonte_15 cor_5 bold">Data de encerramento:</b>
          </div>

          <div className="line">
            {/*Chamar informação value da API */}
              <input type="date" value="2022-06-15" />
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
              <input type="number" value="" />
            </div>

            <div className="float">
              {/*Chamar informação value da API */}
              <input type="text" value="" />
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

          <a href="/home">
            <BotaoSalvar/>
          </a>
        </div>

      </Formulario>
    </>
  )
}

export default Editar2;
