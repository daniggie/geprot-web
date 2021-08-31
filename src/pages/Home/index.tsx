import React, { useState, useEffect, FormEvent } from 'react';
import Cards from '../../components/Cards';
import api from '../../services/api';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { FiChevronRight  } from 'react-icons/fi';
import { All, Filtros, Error, Form } from './style';
import FilterSearch from '../../components/FilterSearch';
import FilterStatus from '../../components/FilterStatus';

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
const [consulta, setConsulta] = useState<Card[]>([]);

window.onload = async function handleProjetos() {
  const response = await api.get<Card[]>(`projetos/listar`);
  const data = response.data;
  setConsulta(data);
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
        {consulta.map(consultaCard => (
          <Cards/>
        ))}

        <Menu/>

      </All>

    </>
  );
};

export default Home;
