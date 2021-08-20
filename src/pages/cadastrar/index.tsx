import React, { useState, FormEvent } from 'react';
<<<<<<< HEAD
import { Titulo, Formulario, Caixa, Irmaos, LadoE, LadoD, Escrita, Linha, Segura } from './style';

import Barra from "../../components/Barra";
=======
import { Barra, Titulo, Formulario, Caixa, Irmaos, LadoE, LadoD, Escrita, Linha, Segura } from './style';
import arrowleft from '../../icons/arrowleft.svg';
>>>>>>> 520004df1dcfb1d8a9bcde029f372e436c3e0487
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
<<<<<<< HEAD
          <a href="/cadastrar2">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
          </a>
          
=======
          <BotaoAvancar/>
>>>>>>> 520004df1dcfb1d8a9bcde029f372e436c3e0487
        </Formulario>

        </>
    );
}
export default Cadastrar;
