import React, { useState, FormEvent } from 'react';
import { Titulo } from './styles';
import { RiAddLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import api from '../../../services/api';
import Header from '../../../components/Header';

const Cadastro:React.FC = () => {
  return( 
    <>
      <Header/>

      <Titulo>
        <p className="helvetica fonte_20 cor_5 bold">CADASTRO DE PROJETOS</p>
      </Titulo>

      

    </>
  );
};

export default Cadastro;