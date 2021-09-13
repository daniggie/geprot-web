import React from "react";

import { Container } from "./style"

const SwitchFlags: React.FC = () => {
  return(
    <Container>
      <div className="lang-menu">
        <div className="selected-lang">
          Português
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
            <a href="" className="fr">Françês</a>
          </li>
          <li>
            <a href="" className="ar">Arabe</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default SwitchFlags;
