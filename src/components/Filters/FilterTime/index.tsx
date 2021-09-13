import React from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container } from "./styles";

const FilterTime: React.FC = () =>{
  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
        Tempo:
      </div>

      <form>
        <select className="status cor_3f" name="status">
          <option value="status">Últimos 7 dias</option>
          <option value="status">Último mês</option>
          <option value="status">Últimos 6 meses</option>
          <option value="status">Último ano</option>
        </select>
      </form>
  </Container>
  );
}

export default FilterTime;
