import React from "react";
import { Titulo, Formulario } from './style';
import Barra from "../../../components/Barra";
import BotaoAvancar from '../../../components/Buttons/ButtonAvancar';
import { FiX } from "react-icons/fi";

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
              <b className="helvetica fonte_15 cor_3 bold">Centro de custo:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="NAME TEXT EXEMPLO" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Percentual aprovado:</b>
            </div>

            <div className="line">
                <input type="text" placeholder="%" />
            </div>

            <div className="line">
              <b className="helvetica fonte_15 cor_3 bold">Limite de horas aprovado:</b>
            </div>

            <div className="line">
                <input type="time" placeholder="" />
            </div>
          </div>

          <div className="content">
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
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_3f">
                  <FiX color="#fff"/>
                  </div>
                  SEÇÃO EXEMPLO
                </div>

                <div className="column2">
                  00%
                </div>
              </div>

            </div>

          </div>


          <div className="position">
            <a href="/editar4">
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
