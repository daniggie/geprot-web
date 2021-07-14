import React, { useState, FormEvent } from 'react';
import { Barra, Titulo, Formulario, Caixa } from './style';
import arrowleft from '../../icons/arrowleft.svg';

const Cadastrar: React.FC = () => {
    return (
      <>
        <Barra>
            <img src={arrowleft}/>
        </Barra>
        <Titulo>
          <h1>CADASTRO DE PRODUTOS</h1>
        </Titulo>
        <Formulario>
          <h1>IDENTIFICADORES</h1>
          <Caixa>
            <div>

            </div>

          </Caixa>
        </Formulario>

        </>
    );
}
export default Cadastrar;
