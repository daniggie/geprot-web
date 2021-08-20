import React, { useState, FormEvent } from 'react';
import { Barra, Titulo, Formulario, Caixa, Irmaos, LadoE, LadoD, Escrita, Linha, Segura } from './style';
import arrowleft from '../../icons/arrowleft.svg';
import BotaoAvancar from '../../components/ButtonAvancar';

const Cadastrar2: React.FC = () => {
    return (
      <>
        <Barra>
            <img src={arrowleft}/>
        </Barra>
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
          <BotaoAvancar/>
        </Formulario>

        </>
    );
}
export default Cadastrar2;
