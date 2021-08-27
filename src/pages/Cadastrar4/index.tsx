import React from 'react';
import { Titulo, Formulario } from './style';
import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/ButtonAvancar';
import { BsFillCaretRightFill, BsX } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";



const Cadastrar4: React.FC = () => {
    return (
      <>
        <a href="/cadastrar3">
        <Barra>
        </Barra>
      </a>

        <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">CENTRO DE CUSTOS</p>
        </Titulo>
        <Titulo>
          <b className="helvetica fonte_15 cor_0">Cadastro de projetos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Aprovações</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Verbas</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Centro de custos </u> </b>
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

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Nome CC:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Responsável CC:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="Digite aqui..." />
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Centro de custo:</b>
              <b className="helvetica fonte_15 cor_3 bold">Percentual aprovado:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input type="text" placeholder="Digite aqui..." />
              </div>
              <div className="tamanho2">
                <input type="number" placeholder="%"/>
              </div>
              <div className="box cor_3f">
              <RiAddLine color="#fff"/>
              </div>

            </div>

            <div className="table">

              <div className="header">
                <div className="title1 bold helvetica cor_0 fonte_15">
                  Centro de custo
                </div>
                <div className="title2 bold helvetica cor_0 fonte_15">
                    Percentual
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  Vendas
                </div>

                <div className="column2">
                  100%
                </div>
              </div>


            </div>
          </div>

          <div className="position">
            <a href="/cadastrar5">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>

        </>
    );
}
export default Cadastrar4;
