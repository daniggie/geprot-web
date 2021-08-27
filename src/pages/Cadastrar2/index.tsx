import React, { useState, FormEvent } from 'react';
import { Titulo, Formulario } from './style';
import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/ButtonAvancar';
import BotaoCancel from '../../components/ButtonCancel';
import { BsFillCaretRightFill } from "react-icons/bs";

const Cadastrar2: React.FC = () => {
    return (
      <>
        <a href="/cadastrar">
        <Barra>
        </Barra>
      </a>

        <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">APROVAÇÕES</p>
        </Titulo>
        <Titulo>
          <b className="helvetica fonte_15 cor_0">Cadastro de projetos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Aprovações </u> </b>
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
              <b className="helvetica fonte_15 cor_3 bold">ID comissão:</b>
              <b className="helvetica fonte_15 cor_3 bold">Data de aprovação:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="text" placeholder="0000000000" />
              </div>
              <div className="tamanho">
                <input type="date" placeholder="" />
              </div>

            </div>
          </div>

          <p className="helvetica fonte_20 cor_5 bold">ATAS</p>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">ATA de comissão:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">ATA DG:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

          </div>


          <div className="position">

            <a href="/home">
              <BotaoCancel>
              </BotaoCancel>
            </a>



            <a href="/cadastrar3">
              <BotaoAvancar>
              </BotaoAvancar>
            </a>
          </div>
        </Formulario>

        </>
    );
}
export default Cadastrar2;
