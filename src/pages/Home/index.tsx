import React, { useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Content_cards } from './style';
import FilterSearch from '../../components/Filters/FilterSearch';
import FilterStatus from '../../components/Filters/FilterStatus';

import { FiChevronRight } from "react-icons/fi";

const Home: React.FC = () => {

   return (
    <>
    <Header/>
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
        </Content_cards>
        <Menu/>
      </All>
    </>
  );
};

export default Home;
;
