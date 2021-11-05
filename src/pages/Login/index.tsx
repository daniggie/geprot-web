import React, { useRef, useCallback, useContext, useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Form } from '@unform/web';
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { useAuth } from "../../hooks/auth";
import { MenssagemErro } from "../../hooks/toast";

import getValidationsErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Buttons/Button";

import { Container, Content, ContInput, Strip, Triangle, Imagem, ContPass } from "./styles";
import { useHistory } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface SignFormData {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignFormData) => {
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
      if(err instanceof Yup.ValidationError){
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);

        return
      }

      MenssagemErro("Ocorreu um erro ao fazer login, cheque as credenciais.")

    }
  }, [signIn, history]);

  const [showPass, setShowPass] = useState(false);
  const handleClickPass = (e:any) => {
    e.preventDefault()
    setShowPass(!showPass)
  };

  return(
    <>
    <Container>
      <Content>
        <Imagem src="https://upload.wikimedia.org/wikipedia/commons/d/dd/WEG_Equipamentos_El%C3%A9tricos.svg" alt="logoweg"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Strip>Bem Vindo ao GeProT!</Strip>
          <Triangle></Triangle>
          <ContInput>
            <p>Nome do usuário*</p>
            <Input icon={FiMail} name="email" placeholder="" />
          </ContInput>
          <ContInput>
            <p>Senha*</p>
            <Input icon={FiLock} name="senha" type={showPass ? "text" : "password"} placeholder="" />
            <div className="login_eye">
              {showPass ? (<HiEye size={25} color="#00579E" onClick={handleClickPass}/>) : (<HiEyeOff color="#e1dcda" size={25} onClick={handleClickPass}/>)}
            </div>
          </ContInput>
          <ContPass>
            <p className="forget">Esqueceu a sua senha?</p>
            <Button type="submit"/>
          </ContPass>
        </Form>
      </Content>
    </Container>
    </>
  );

}

export default Login;
