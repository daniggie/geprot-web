import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';
import Cards from '../../components/Cards';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import arrowRight from '../../icons/arrow-right.svg';

import { All, Filtros, Error, Form } from './style';

//interface Projeto {
//  idprojeto: Number,
//  nomeprojeto: string,
//  datainicio: Date,
  //datafinalizacao: Date,
  //horasprevistas: Number,
  //horastrabalhadas: Number,
  //valorprojeto: Number,
  //valorutilizado: Number,
  //valorrestante: Number,
  //statusprojeto: String
//}

const Home: React.FC = () => {
//const [newEndereco , setNewEndereco] = useState('');
//const [inputError, setInputError] = useState('');
//const [repositories, setRepositories] = useState<Projeto[]>(() => {
//  const storageEndereco = localStorage.getItem(
//    '@EnderecoExplorer:repositories',
//  );

// if(storageEndereco){
//    return JSON.parse(storageEndereco);
//  }
//  return [];
//});

//useEffect(() => {
//  localStorage.setItem(
//    '@EnderecoExplorer:repositories',
//    JSON.stringify(repositories)

//   );
//}, [repositories]);

//async function handleAddRepository(
//  event: FormEvent<HTMLFormElement>,
//): Promise<void> {
//  event.preventDefault();

//  if(!newEndereco){
//    setInputError("Campo de busca encontra-se vazio!");
//    return;
//  }

// try{

//    const response = await api.get<Projeto>(`projetos/listar`);
//    const repository = response.data;

//    setRepositories([...repositories, repository]);
//    setNewEndereco('');
//    setInputError('');

//  } catch(err){
//    setInputError("Endereço não encontrado/inexistente");
//  }

//}

  return (
    <>
      <Header>
      </Header>

      <Filtros>

        <div className="content_title">
            <div className="arrow">
              <img src={arrowRight} alt="" />
            </div>

            <div className="texto cor_4">
                Projetos
            </div>
        </div>

        <div className="content_title">
            <div className="arrow">
              <img src={arrowRight} alt="" />
            </div>

            <div className="texto cor_4">
                Status:
            </div>

            <form>
                <select className="status cor_3f" name="status">
                    <option value="status">Todos</option>
                    <option value="status">Andamento</option>
                    <option value="status">Atrasado</option>
                    <option value="status">Concluído</option>
                </select>
            </form>
        </div>

        <div className="content_procurar">
            <div className="arrow">
            <img src={arrowRight} alt="" />
            </div>

            <div className="texto cor_4">
                Procurar:
            </div>
            
            <form>
              <input value="search"className="procurar cor_0" type="text" id="fname" name="fname" placeholder="Digite o nome do projeto..." />
              <button type="submit" className="cor_3f"><BsSearch size={15}/></button>
            </form>
            
            

        </div>

      </Filtros>

      <All>

        <Cards>
        </Cards>

        <Menu>
        </Menu>

      </All>

    </>
  );
};

export default Home;
