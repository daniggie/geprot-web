import React, { useState, FormEvent } from 'react';
import { Titulo, Formulario } from './style';

import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/Buttons/ButtonAvancar';
import { BsFillCaretRightFill } from "react-icons/bs";

const Cadastrar: React.FC = () => {
    return (
      <>
        <Barra>
        </Barra>

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE PROJETOS</p>
        </Titulo>
        <Formulario>
          <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">ID Projeto:</b>
              <b className="helvetica fonte_15 cor_3 bold">ID PPM:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="text" placeholder="000000000" />
              </div>
              <div className="tamanho">
                <input type="text" placeholder="000000000" />
              </div>

            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Titulo do Projeto:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do solicitante:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Data de inicio:</b>
              <b className="helvetica fonte_15 cor_3 bold">Data de encerramento:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="date" placeholder="" />
              </div>
              <div className="tamanho">
                <input type="date" placeholder="" />
              </div>
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome do responsável:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome no sistema:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

          </div>


          <div className="position">
            <a href="/cadastrar2">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>

        </>
    );
}
export default Cadastrar;
