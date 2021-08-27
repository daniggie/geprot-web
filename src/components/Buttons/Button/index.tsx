import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

import {FiLogIn} from "react-icons/fi";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container type="button" {...rest}>
    {children}
    <div className="divButton">
      <div className="divIcon">
        <FiLogIn size="25" color="cor_000"/>
      </div>
      <p>ENTRAR</p>
      </div>
    </Container>
);

export default Button;
