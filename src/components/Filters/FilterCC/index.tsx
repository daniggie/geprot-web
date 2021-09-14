import React from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container, ContFilter } from "./styles";

const FilterCC: React.FC = () =>{
  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
        Centro de Custos:
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
              <a href="" className="br">Centro ABCD</a>
            </li>
            <li>
              <a href="" className="en">Centro EFGH</a>
            </li>
            <li>
              <a href="" className="fr">Centro IJKL</a>
            </li>
          </ul>
        </div>
      </ContFilter>

    </Container>
  );
}

export default FilterCC;
