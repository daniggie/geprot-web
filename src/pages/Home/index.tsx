import React, { useState, useEffect, FormEvent } from 'react';
import Cards from '../../components/Cards';
import api from '../../services/api';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Content_cards } from './style';
import FilterSearch from '../../components/FilterSearch';
import FilterStatus from '../../components/FilterStatus';
import { FiChevronRight } from "react-icons/fi";

interface Card {
  projeto : {
  id: Number,
  nome: string,
  datainicio: Date,
  datafinalizacao: Date,
  datacadastro: Date,
  horasprevistas: Number,
  horastrabalhadas: Number,
  valorprojeto: Number,
  valorutilizado: Number,
  valorrestante: Number,
  statusprojeto: String
  },
  usuario: {
    id: number,
    nome: String,
    email: String,
    secao:{
      id:number,
      nome:String
    }
  }
}

const Home: React.FC = () => {
const [newCard , setNewCard] = useState('');
const [inputError, setInputError] = useState('');
const [repositories, setRepositories] = useState<Card[]>(() => {
  const storageCard = localStorage.getItem(
    '@CardExplorer:repositories',
  );

 if(storageCard){
    return JSON.parse(storageCard);
  }
  return [];
});

useEffect(() => {
  localStorage.setItem(
    '@CardExplorer:repositories',
    JSON.stringify(repositories)

   );
}, [repositories]);

async function handleAddRepository(
  event: FormEvent<HTMLFormElement>,
): Promise<void> {
  event.preventDefault();

  if(!newCard){
    setInputError("Campo de busca encontra-se vazio!");
    return;
  }

 try{

    const response = await api.get<Card>(`projetos/listar`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewCard('');
    setInputError('');

  } catch(err){
    setInputError("Nenhum projeto para ser listado");
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

        <Content_cards>

        <Cards/>
        <Cards/>
        <Cards/>


        </Content_cards>

        <Menu/>

      </All>
    </>
  );
};

export default Home;
