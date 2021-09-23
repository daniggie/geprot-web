import React from "react";
import { FiChevronRight } from "react-icons/fi"
import { Container, ContFilter } from "./styles";


const FilterStatus: React.FC = () =>{

  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#00579D"/>
      </div>

      <div className="texto cor_5">
          Status:
      </div>

      <ContFilter>
        <div className="lang-menu">
          <div className="selected-lang">
            Todos
          </div>
          <ul>
            <li>
              <a className="de" >Todos</a>
            </li>
            <li>
              <a className="br" >Andamentos</a>
            </li>
            <li>
              <a className="en" >Atrasados</a>
            </li>
            <li>
              <a className="fr" >Concluídos</a>
            </li>
            <li>
              <a className="fr" >Não Iniciado</a>
            </li>
          </ul>
        </div>
      </ContFilter>

    </Container>
  );
}

export default FilterStatus;
