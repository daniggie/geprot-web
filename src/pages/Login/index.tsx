import React, { useRef, useCallback, useContext } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from '@unform/web';
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { AuthContext, useAuth } from "../../hooks/auth";

import getValidationsErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content } from "./styles";
import { useHistory } from "react-router-dom";

interface SignFormData {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignFormData) => {
    try{
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
            email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),
            senha: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {abortEarly: false,
        });

        await signIn({
          email: data.email,
          senha: data.senha
        })

        history.push('/home');
    }catch(err){

        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
    }
  }, [signIn, history]);

  return(
    <Container>

      <Content>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="teste">Esqueci minha senha</a>
        </Form>

      </Content>

    </Container>
  );

}

export default Login;
