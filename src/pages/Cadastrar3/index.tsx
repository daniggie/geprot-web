import React, { useState, FormEvent } from 'react';
import { Titulo, Formulario } from './style';
import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/Buttons/ButtonAvancar';
import BotaoCancel from '../../components/Buttons/ButtonCancel';
import { BsFillCaretRightFill } from "react-icons/bs"

const Cadastrar3: React.FC = () => {
    return (
      <>
        <Barra>
        </Barra>

        <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">VERBAS</p>
        </Titulo>
        <Titulo>
          <b className="helvetica fonte_15 cor_0">Cadastro de projetos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Aprovações</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Verbas </u> </b>
        </Titulo>
        <Formulario>
          <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">ID Projeto:</b>
              <b className="helvetica fonte_15 cor_3 bold">ID Aprovação:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="text" placeholder="000000000" />
              </div>
              <div className="tamanho">
                <input type="text" placeholder="000000000" />
              </div>

            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Quantidade de horas:</b>
              <b className="helvetica fonte_15 cor_3 bold">Valor aprovado:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="time" placeholder="" />
              </div>
              <div className="tamanho">
                <input type="number" placeholder="R$ 0,00"/>
              </div>

            </div>
          </div>

          <p className="helvetica fonte_20 cor_5 bold">HABILIDADES</p>

          <b className="helvetica fonte_15 cor_3 bold">Skills:</b>

          <input type="text" placeholder="Digite aqui..." />


          <div className="position">
          <a href="/home">
              <BotaoCancel>
              </BotaoCancel>
            </a>

            <a href="/cadastrar4">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>

        </>
    );
}
export default Cadastrar3;
