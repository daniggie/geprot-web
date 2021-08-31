import React from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Content_cards } from './style';
import FilterSearch from '../../components/FilterSearch';
import FilterStatus from '../../components/FilterStatus';

import { FiChevronRight } from "react-icons/fi";

const Home: React.FC = () => {
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
          <a href="/detalhes">
            <Cards/>
          </a>
        </Content_cards>
        <Menu/>

      </All>
    </>
  );
};

export default Home;
