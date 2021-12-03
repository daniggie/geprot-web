import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./style";
//Revisado 03/12/2021
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonRegister: React.FC<ButtonProps> = ({ children, ...rest}) => (
    <Container type="button" {...rest}>
        {children}
        <p className="fonte_20 cor_000">Cadastrar</p>
    </Container>
);

export default ButtonRegister;