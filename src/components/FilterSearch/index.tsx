import React from "react";

import {FiChevronRight, FiSearch} from "react-icons/fi"
import { Container } from "./styles";

const FilterSearch: React.FC = () =>{
  return (
    <Container className="content_procurar">
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
          Procurar:
      </div>

      <form>
        <input className="procurar cor_0" type="text" id="fname" name="fname" placeholder="Nome, ID, seção..." />
        <button type="submit" className="cor_3f"><FiSearch size={15}/></button>
      </form>
    </Container>
  );
}

export default FilterSearch;
