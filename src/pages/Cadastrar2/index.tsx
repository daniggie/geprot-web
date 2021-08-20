import React, { useState, FormEvent } from 'react';
import { Titulo, Formulario, Caixa, Irmaos, LadoE, LadoD, Escrita, Linha, Segura } from './style';
import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/ButtonAvancar';

const Cadastrar2: React.FC = () => {
    return (
      <>
        <a href="/cadastrar">
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
                  <Escrita>ID Projeto:</Escrita>
                  <input type="text" placeholder="Digite aqui..." />
                </LadoE>
                <LadoD>
                  <Escrita>ID PPM:</Escrita>
                  <input type="text" placeholder="Digite aqui..." />
                </LadoD>
              </Segura>
              <h1>IDENTIFICADORES</h1>
              <Linha>
                <Escrita>Nome do solicitante:</Escrita>
                <input type="text" placeholder="Digite aqui..." />
              </Linha>
            </Irmaos>
            <Irmaos>
            <Segura>
                <LadoE>
                  <Escrita>Data inicio:</Escrita>
                  <input type="date"  />
                </LadoE>
                <LadoD>
                  <Escrita>Data Encerramento:</Escrita>
                  <input type="date" />
                </LadoD>
              </Segura>
              <Linha>
                <Escrita>Nome do responsável:</Escrita>
                <input type="text" placeholder="Digite aqui..." />
              </Linha>
            </Irmaos>
          </Caixa>
          <a href="/cadastrar3">
          <BotaoAvancar>
          <p className="helvetica fonte_20 bold">Próximo</p>
          </BotaoAvancar>
          </a>
        </Formulario>

        </>
    );
}
export default Cadastrar2;
