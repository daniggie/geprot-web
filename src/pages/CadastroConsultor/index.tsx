import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";

interface CadastraConsultor {
	nome: string,
	id: number,
	email: string,
	senha: string,
	idFornecedor:{
		id:number
	},
	secao: {
		id: number
	},
	precoHora:number
}

const Configuracao: React.FC = () => {


  const consultor = {
    nome: "",
    id:"",
    email: "",
    senha: "",
    idFornecedor: "",
    idSecao:"",
    precoHora:""
  }


  const Cadastrar = () => {
    consultor.nome = (document.getElementById('nome') as HTMLInputElement).value;
    consultor.id = (document.getElementById('idFornecedor') as HTMLInputElement).value;
    consultor.email = (document.getElementById('email') as HTMLInputElement).value;
    consultor.senha = (document.getElementById('senha') as HTMLInputElement).value;
    consultor.idFornecedor = (document.getElementById('idFornecedor') as HTMLInputElement).value;
    consultor.idSecao = (document.getElementById('') as HTMLInputElement).value;
    console.log(JSON.stringify(consultor))
    localStorage.setItem('@Geprot:cadastra',JSON.stringify(consultor));
  }





  return (
    <>
    <Header />

    <All>

      <Container>
        <div className="container_square">

          <div className="title">
            <b className="helvetica fonte_20 cor_5">CADASTRO DE CONSULTOR</b>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Nome do consultor:</p>
            <input id="nome" type="text" placeholder="Nome completo..." />
            <p id="emaial" className="helvetica fonte_15 cor_3">Email:</p>
            <input type="text" placeholder="E-mail..."/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Id do fornecedor:</p>
            <input id="idFornecedor" type="text" placeholder="Id do fornecedor..."/>
            <p className="helvetica fonte_15 cor_3">Preço das horas:</p>
            <input id="valorHora" type="number" min="0" max="10000" step="1" placeholder="R$"/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Senha:</p>
            <input id="senha" type="password" placeholder="senha..."/>
            <p className="helvetica fonte_15 cor_3">Confirmar senha:</p>
            <input id="confirmarSenha" type="password" placeholder="Confirmar senha..."/>
          </div>

          <div className="position">
            <BotaoCancel/>
            <button className="fonte_20">Enviar</button>
          </div>

        </div>
      </Container>

      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
