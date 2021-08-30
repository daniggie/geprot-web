import React, { useState, useEffect, FormEvent } from 'react';
import Cards from '../../components/Cards';
import api from '../../services/api';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Error, Form } from './style';
import FilterSearch from '../../components/FilterSearch';
import FilterStatus from '../../components/FilterStatus';
import { FiChevronRight } from 'react-icons/fi';

interface Projeto {
  id: Number,
  nomeprojeto: string,
  datainicio: Date,
  datafinalizacao: Date,
  horasprevistas: Number,
  horastrabalhadas: Number,
  valorprojeto: Number,
  valorutilizado: Number,
  valorrestante: Number,
  statusprojeto: String
}

const Home: React.FC = () => {
const [newEndereco , setNewEndereco] = useState('');
const [inputError, setInputError] = useState('');
const [repositories, setRepositories] = useState<Projeto[]>(() => {
  const storageEndereco = localStorage.getItem(
    '@EnderecoExplorer:repositories',
  );

 if(storageEndereco){
    return JSON.parse(storageEndereco);
  }
  return [];
});

useEffect(() => {
  localStorage.setItem(
    '@EnderecoExplorer:repositories',
    JSON.stringify(repositories)

   );
}, [repositories]);

async function handleAddRepository(
  event: FormEvent<HTMLFormElement>,
): Promise<void> {
  event.preventDefault();

  if(!newEndereco){
    setInputError("Campo de busca encontra-se vazio!");
    return;
  }

 try{

    const response = await api.get<Projeto>(`projetos/listar`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewEndereco('');
    setInputError('');

  } catch(err){
    setInputError("Endereço não encontrado/inexistente");
  }

}

  return (
    <>
      <Header>
      </Header>

      <Filtros>

        <div className="content_title">
            <div className="arrow">
              <FiChevronRight size="15px" color="#0091BD"/>
            </div>

            <div className="texto cor_4">
                Projetos
            </div>
        </div>

        <FilterStatus/>

        <FilterSearch/>

      </Filtros>

      <All>

        <Cards/>

        <Menu/>

      </All>

    </>
  );
};

export default Home;
