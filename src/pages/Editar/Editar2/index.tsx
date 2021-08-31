import React from "react";
import { Titulo, Formulario } from './style';

import Barra from "../../../components/Barra";
import BotaoAvancar from '../../../components/Buttons/ButtonAvancar';
import { BsFillCaretRightFill } from "react-icons/bs";

const Editar2: React.FC = () => {
  return(
    <>
      <Barra />

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">EDITAR PROJETO</p>
        </Titulo>
        <Formulario>
          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do projeto:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="NOME DO PROJETO" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Descrição do projeto:</b>
            </div>

            <div className="line">
              <div className="box">
                <textarea cols={40}>Reduzir a atividade manual da equipe interna WEC na entrada de
                        ordens de venda (OV), envio da confirmação e aviso de remessa
                        ao Cliente XYZ USA. Atender solicitação do cliente para automatizar o envio de pedidos e atualização do próprio sistema
                        através do EDI. O Cliente já
                        implementou este sistema nos principais fornecedores. </textarea>
              </div>
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Data de inicio:</b>
            </div>

            <div className="line">
                <input type="date" placeholder="" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Data de encerramento:</b>
            </div>

            <div className="line">
                <input type="date" placeholder="" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Data de aprovação:</b>
            </div>

            <div className="line">
                <input type="date" placeholder="" />
            </div>
          </div>


          <div className="position">
            <a href="/editar3">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>
    </>
  )
}

export default Editar2;
