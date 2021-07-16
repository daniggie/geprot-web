import React from "react";
import { Imagem, Container1, Barra1, Triangulo, Container2, Titulo, CxTexto, CxTexto2, BtnEntrar, Icone, Titulo2, PegaImagem } from './styles'

import entrar from '../../icons/entrar.svg';

const Login: React.FC = () => {
  return(
  <>
    <PegaImagem>
    <Imagem src="https://upload.wikimedia.org/wikipedia/commons/d/dd/WEG_Equipamentos_El%C3%A9tricos.svg" alt="logoweg"/>
    </PegaImagem>
    <Container1>
      <Barra1>Bem Vindo ao GeProT!     </Barra1>
      <Triangulo></Triangulo>
      <Container2>
          <Titulo>Nome do usuário*</Titulo>
          <CxTexto></CxTexto>
      </Container2>
      <Container2>
          <Titulo>Senha*</Titulo>
          <CxTexto></CxTexto>
      </Container2>
      <Container2>
          <CxTexto2>Esqueceu a sua senha?</CxTexto2>
          <BtnEntrar >
            <a href="/home">
                <Titulo2>
                <Icone>
                  <img src={entrar} alt="" />
                </Icone>
                <p>ENTRAR</p>
                </Titulo2>
            </a>
          </BtnEntrar>
      </Container2>
    </Container1>
  </>
  );
};
export default Login;
