import React, { useState, FormEvent } from 'react';
import { Titulo, Formulario, Caixa, Irmaos, LadoE, LadoD, Escrita, Linha, Segura } from './style';

import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/ButtonAvancar';

const Cadastrar: React.FC = () => {
    return (
      <>
      <a href="/home">
        <Barra>
        </Barra>
      </a>

        <Titulo>
          <h1>CADASTRO DE PROJETOS</h1>
        </Titulo>
        <Formulario>
          <h1>IDENTIFICADORES</h1>
          <Caixa>
            <Irmaos>
              <Segura>
                <LadoE>
                  <Escrita className="helvetica fonte_20">ID Projeto:</Escrita>
                  <input type="text" placeholder="Digite aqui..." />
                </LadoE>
                <LadoD>
                  <Escrita className="helvetica fonte_20">ID PPM:</Escrita>
                  <input type="text" placeholder="Digite aqui..." />
                </LadoD>
              </Segura>
              <Linha>
                <Escrita className="helvetica fonte_20">Titulo do projeto:</Escrita>
                <input type="text" placeholder="Digite aqui..." />
              </Linha>
              <Linha>
                <Escrita className="helvetica fonte_20">Nome do solicitante:</Escrita>
                <input type="text" placeholder="Digite aqui..." />
              </Linha>
            </Irmaos>
            <Irmaos>
            <Segura>
                <LadoE>
                  <Escrita className="helvetica fonte_20">Data inicio:</Escrita>
                  <input type="date"  />
                </LadoE>
                <LadoD>
                  <Escrita className="helvetica fonte_20">Data Encerramento:</Escrita>
                  <input type="date" />
                </LadoD>
              </Segura>
              <Linha>
                <Escrita className="helvetica fonte_20">Nome do responsável:</Escrita>
                <input type="text" placeholder="Digite aqui..." />
              </Linha>
              <Linha>
                <Escrita className="helvetica fonte_20">Nome no sistema:</Escrita>
                <input type="text" placeholder="Digite aqui..." />
              </Linha>
            </Irmaos>
          </Caixa>
          <a href="/cadastrar2">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
          </a>

          <BotaoAvancar/>
        </Formulario>

        </>
    );
}
export default Cadastrar;
