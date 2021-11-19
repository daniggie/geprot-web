import React from "react";
import { Titulo, Formulario } from './style';

import Barra from "../../components/Barra";
import BotaoSalvar from '../../components/Buttons/ButtonSalvar';
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import InputRegister from '../../components/InputRegister';

const Editar2: React.FC = () => {
  return(
    <>
      <Barra />

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">EDITAR PROJETO</p>
        </Titulo>
        <Formulario>

          {/*Coluna 1*/}
          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Nome do projeto:</b>
            </div>

            <div className="line">
              {/*Chamar informação value da API */}
                <input type="text" value="NOME DO PROJETO" />
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
                {/*Chamar informação value da API */}
                <input type="number" value="67" />
              </div>

              <div className="float">
                <b className="helvetica fonte_15 cor_5 bold">Verbas totais aprovadas:</b>
                {/*Chamar informação value da API */}
                <input type="text" value="R$ 1000,00" />
              </div>
              
            </div>

          </div>


          <div className="position">

            <a href="/editar1">
            <BotaoCancel />
            </a>

            <a href="/editar1">
            <BotaoSalvar>
            <p className="helvetica fonte_20 bold">Salvar</p>
            </BotaoSalvar>
            </a>
          </div>
        </Formulario>
    </>
  )
}

export default Editar2;
