import React, { useState } from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container, ContFilter } from "./styles";

const FilterStatus: React.FC = () =>{

  function addStatus(statusInt: string){
    alert(statusInt)
    return statusInt;
  };
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
              <a href="" className="de" onClick={() => addStatus("0")}>Todos</a>
            </li>
            <li>
              <a href="" className="br" onClick={() => addStatus("4")}>Andamentos</a>
            </li>
            <li>
              <a href="" className="en" onClick={() => addStatus("2")}>Atrasados</a>
            </li>
            <li>
            <a href="" className="fr" onClick={() => addStatus("3")}>Concluídos</a>
            </li>
            <li>
              <a href="" className="fr" onClick={() => addStatus("1")}>Não Iniciado</a>
            </li>
          </ul>
        </div>
      </ContFilter>

    </Container>
  );
}

export default FilterStatus;
