import React from "react";

import { FiChevronRight } from "react-icons/fi"
import { Container } from "./styles";

const FilterCC: React.FC = () =>{
  return (
    <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
        Centro de Custos:
      </div>

      <form>
        <select className="status cor_3f" name="status">
          <option value="status">Todos</option>
          <option value="status">Centro ABCD</option>
          <option value="status">Centro EFGH</option>
          <option value="status">Centro IJKL</option>
        </select>
      </form>
    </Container>
  );
}

export default FilterCC;
