import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";
import {FiLogIn} from "react-icons/fi";
//Revisado 03/12/2020

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container type="button" {...rest}>
    {children}
    <div className="container_button">
      <div className="container_icon">
        <FiLogIn size="25" color="cor_000"/>
      </div>
      <p>ENTRAR</p>
    </div>
  </Container>
);

export default Button;
