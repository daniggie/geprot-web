import React, { useState, FormEvent } from 'react';
import { Barra, Titulo, Formulario, Caixa, Irmaos, LadoE, LadoD, Escrita, Linha, Segura, Topo, Baixo, TituloBaixo } from './style';
import arrowleft from '../../icons/arrowleft.svg';
import BotaoAvancar from '../../components/ButtonAvancar';

const Cadastrar3: React.FC = () => {
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
            <Topo>
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
                </Irmaos>
            </Topo>
            <TituloBaixo>HABILIDADES</TituloBaixo>
            <Baixo>
                <Linha>
                    <Escrita>Nome do solicitante:</Escrita>
                    <input type="text" placeholder="Digite aqui..." />
                </Linha>
            </Baixo>
          </Caixa>
          <BotaoAvancar/>
        </Formulario>
    </>
    );
}
export default Cadastrar3;
