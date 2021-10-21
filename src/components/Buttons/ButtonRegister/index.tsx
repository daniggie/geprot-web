import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonRegister: React.FC<ButtonProps> = ({ children, ...rest}) => (
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default ButtonRegister;