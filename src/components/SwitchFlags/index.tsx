import React from "react";

import { Container } from "./style";

import { FiChevronDown } from "react-icons/fi"

const SwitchFlags: React.FC = () => {
  return(
    <Container>
      <div className="lang-menu">
        <div className="selected-lang">
          <FiChevronDown/>
        </div>
        <ul>
          <li>
            <a href="#" className="de">Alemão</a>
          </li>
          <li>
            <a href="" className="br">Português</a>
          </li>
          <li>
            <a href="" className="en">Inglês</a>
          </li>
          <li>
            <a href="" className="fr">Francês</a>
          </li>
          <li>
            <a href="" className="ar">Chinês</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default SwitchFlags;
