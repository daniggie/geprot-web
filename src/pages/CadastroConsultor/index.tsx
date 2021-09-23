import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import api from "../../services/api";
import { useHistory } from "react-router";


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
  const history = useHistory();

  const consultor = {
    nome: "",
    id: 0,
    email: "",
    senha: "",
    idFornecedor:{
      id:0
    },
    secao: {
      id: 0
    },
    precoHora: 0
  }

  const Cadastrar = async () => {
    try{
      consultor.nome = (document.getElementById('nome') as HTMLInputElement).value;
      console.log("chegou até aqui")
      consultor.id = parseInt((document.getElementById('id') as HTMLInputElement).value);
      consultor.email = (document.getElementById('email') as HTMLInputElement).value;
      consultor.senha = (document.getElementById('senha') as HTMLInputElement).value;
      consultor.idFornecedor.id = parseInt((document.getElementById('idFornecedor') as HTMLInputElement).value); 
      consultor.precoHora = parseFloat((document.getElementById('precoHora') as HTMLInputElement).value);
      console.log(consultor)      
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.post("/usuarios/cadastrar", consultor, config);
      history.push('/home');
    }catch(err){
      alert("Deu pau")
    }
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
            <p className="helvetica fonte_15 cor_3">Email:</p>
            <input id="email" type="text" placeholder="E-mail..."/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Id:</p>
            <input id="id" type="text" placeholder="Id..."/>
            <p className="helvetica fonte_15 cor_3">Preço das horas:</p>
            <input id="precoHora" type="number" min="0" max="10000" step="1" placeholder="R$"/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_3">Senha:</p>
            <input id="senha" type="password" placeholder="senha..."/>
            <p className="helvetica fonte_15 cor_3">id do Fornecedor:</p>
            <input id="idFornecedor" type="texte" placeholder="Id do fornecedor"/>
          </div>

          <div className="position">
            <BotaoCancel/>
            <button className="fonte_20" onClick={() => Cadastrar()}>Enviar</button>
          </div>

        </div>
      </Container>

      <Menu/>

    </All>

    </>
  )
};

export default Configuracao;
