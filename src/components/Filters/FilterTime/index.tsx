import React from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container, ContFilter } from "./styles";

const FilterTime: React.FC = () =>{
  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
        Tempo:
      </div>

      <ContFilter>
        <div className="lang-menu">
          <div className="selected-lang">
            Todos
          </div>
          <ul>
            <li>
              <a href="#" className="de">Todos</a>
            </li>
            <li>
              <a href="" className="de">Últimos 7 dias</a>
            </li>
            <li>
              <a href="" className="br">Último mês</a>
            </li>
            <li>
              <a href="" className="en">Últimos 6 meses</a>
            </li>
            <li>
              <a href="" className="fr">Último ano</a>
            </li>
          </ul>
        </div>
      </ContFilter>

  </Container>
  );
}

export default FilterTime;
