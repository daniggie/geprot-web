import React from "react";
import { } from "./style";
import Header from "../../components/Header";

const CadastroConsultor: React.FC = () => {
  return(
    <>
    <Header/>
    <h1>Cadastro do consultor<br/></h1>
      Tela deve conter:<br/>
      Nome do consultor;<br/>
      Email       ||;<br/>
      ID          ||;<br/>
      Fornecedor  ||;<br/>
      Senha && confirmar senha;<br/>
      Preço das horas.<br/>

    </>
  )
};

export default CadastroConsultor;
