import React from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container } from "./styles";

const FilterStatus: React.FC = () =>{
  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
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
    </Container>
  );
}

export default FilterStatus;
