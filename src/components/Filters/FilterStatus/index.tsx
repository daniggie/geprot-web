import React from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container, ContFilter } from "./styles";

const FilterStatus: React.FC = () =>{
  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
          Status:
      </div>

      <ContFilter>
        <div className="lang-menu">
          <div className="selected-lang">
            Todos
          </div>
          <ul>
            <li>
              <a href="" className="de">Todos</a>
            </li>
            <li>
              <a href="" className="br">Andamentos</a>
            </li>
            <li>
              <a href="" className="en">Atrasados</a>
            </li>
            <li>
              <a href="" className="fr">Concluídos</a>
            </li>
          </ul>
        </div>
      </ContFilter>

    </Container>
  );
}

export default FilterStatus;
