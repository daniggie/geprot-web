import React, { useState, FormEvent } from 'react';
import { Titulo, Formulario } from './style';
import Barra from "../../../components/Barra";
import BotaoAvancar from '../../../components/Buttons/ButtonAvancar';
import BotaoCancel from '../../../components/Buttons/ButtonCancel';
import { BsFillCaretRightFill } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";

const Cadastrar5: React.FC = () => {

  const [ card, setCard ] = useState(false);
  const addcard = () => {
    if(!card){
     setCard(true)
    }else{
      setCard(false)
    }

    return card;

  };

    return (
        <>
        <Barra>
        </Barra>

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">ALOCAÇÃO</p>
        </Titulo>
        <Titulo>
          <b className="helvetica fonte_15 cor_0">Cadastro de projetos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Aprovações</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Verbas</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Centro de custos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Alocação </u> </b>
        </Titulo>
        <Formulario cardColumn={card}>

          <div className="content">
            <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

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

              <p className="helvetica fonte_20 cor_5 bold">CONSULTORES</p>
              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">ID Consultor:</b>
              </div>

              <div className="line">
                <div className="tamanho">
                  <input type="number" placeholder="00000" />
                </div>
                <div className="box cor_3f" onClick={addcard}>
                  <RiAddLine color="#fff"/>
                </div>
              </div>
          </div>

          <div className="content">

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

              <div className="columns helvetica cor_0 lighter">
              <div className="column3">
                  123456
                </div>

                <div className="column1">
                  Ludicir Rodrigues
                </div>

                <div className="column2">
                  80 h
                </div>
              </div>
            </div>


        </div>

          <div className="position">
            <a href="/home">
              <BotaoCancel>
              </BotaoCancel>
            </a>
            <a href="/cadastrar6">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>
      </>
    );
}
export default Cadastrar5;
