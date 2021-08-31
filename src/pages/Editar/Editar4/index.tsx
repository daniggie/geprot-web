import React from "react";
import { Titulo, Formulario } from './style';

import Barra from "../../../components/Barra";
import BotaoSalvar from '../../../components/Buttons/ButtonSalvar';
import BotaoCancel from "../../../components/Buttons/ButtonCancel";
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
              <b className="helvetica fonte_15 cor_3 bold">Nome do responsável:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="NAME EXEMPLO VIEW" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do solicitante:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="NAME EXEMPLO VIEW" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do aprovador:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="NAME EXEMPLO VIEW" />
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Seção do responsável:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="SEÇÃO X" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Seção do solicitante:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="SEÇÃO X" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Seção do aprovador:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="SEÇÃO X" />
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
