import React from "react";
import { FiX } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Content } from "./style"

const Configuracao: React.FC = () => {
  return (
    <>
    <Header />

    <All>

      <Content>
        <div className="config">

          <div className="line">
            <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE CONSULTOR</p>
          </div>

            <div className="content">

              <p className="helvetica fonte_20 cor_5 bold">IDENTIFICADORES</p>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Nome do Projeto:</b>
              </div>

              <div className="line">
                  <input type="text" id="nome" placeholder="Digite aqui..." />
              </div>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Nome do solicitante:</b>
              </div>

              <div className="line">
                  <input type="text" id="nomeSolicitante" placeholder="Digite aqui..." />
              </div>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Nome do responsável:</b>
              </div>

              <div className="line">
                  <input type="text" placeholder="Digite aqui..." id="nomeResponsavel" />
              </div>

              <div className="line">
                <b className="helvetica fonte_15 cor_3 bold">Data de inicio:</b>
                <b className="helvetica fonte_15 cor_3 bold">Data de encerramento:</b>
              </div>

              <div className="line">
                <div className="tamanhoDate">
                  <input type="date"  id="dataInicio"/>
                </div>
                <div className="tamanhoDate">
                  <input type="date" id="dataFinalizacao" />
                </div>
              </div>

            </div>

            <div className="content">

              <p className="helvetica fonte_20 cor_5 bold">CONSULTORES</p>

              <div className="line">
                <div className="lineText">
                  <b className="helvetica fonte_15 cor_3 bold">Consultor:</b>
                </div>

                <div className="lineText">
                  <b className="helvetica fonte_15 cor_3 bold">Horas:</b>
                </div>
              </div>

              <div className="line">
                <div className="tamanho">
                  <input type="number" placeholder="0" />
                </div>
                <div className="tamanho">
                  <input type="number" placeholder="0" />
                </div>
                <div className="box cor_3f" >
                  <RiAddLine color="#fff"/>
                </div>
              </div>

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
                    <div className="box cor_3f" >
                      <FiX color="#fff"/>
                    </div>
                    123456
                  </div>

                  <div className="column1">
                    Ludicir Rodrigues
                  </div>

                  <div className="column2">
                    80 h
                  </div>
                </div>

                <div className="columns helvetica cor_0 lighter">
                  <div className="column3">
                    <div className="box cor_3f" >
                      <FiX color="#fff"/>
                    </div>
                    123456
                  </div>

                  <div className="column1">
                    Ludicir Rodrigues
                  </div>

                  <div className="column2">
                    80 h
                  </div>
                </div>

                <div className="columns helvetica cor_0 lighter">
                  <div className="column3">
                    <div className="box cor_3f">
                      <FiX color="#fff"/>
                    </div>
                    123456
                  </div>

                  <div className="column1">
                    Ludicir Rodrigues
                  </div>

                  <div className="column2">
                    80 h
                  </div>
                </div>

                <div className="columns helvetica cor_0 lighter">
                  <div className="column3">
                    <div className="box cor_3f" >
                      <FiX color="#fff"/>
                    </div>
                    123456
                  </div>

                  <div className="column1">
                    Ludicir Rodrigues
                  </div>

                  <div className="column2">
                    80 h
                  </div>
                </div>

                <div className="columns helvetica cor_0 lighter">
                  <div className="column3">
                    <div className="box cor_3f" >
                      <FiX color="#fff"/>
                    </div>
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
              <span >
                <a href="/cadastrar2">
                  <div className="button">
                    <p className="helvetica fonte_20 bold">Próximo</p>
                  </div>
                </a>
              </span>
            </div>

        </div>
      </Content>
      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
