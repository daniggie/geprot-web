import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import api from "../../services/api";
import { useHistory } from "react-router";

const Configuracao: React.FC = () => {
  const history = useHistory();

  const consultor = {
    id: 0,
    usuario: {
      nome:  "",
      email: "",
      senha: ""
    },
    fornecedor: {
      id: 0
    },
    precoHora :0
  }

  const Cadastrar = async () => {
    try{
      consultor.usuario.nome = (document.getElementById('nome') as HTMLInputElement).value;
      console.log("chegou até aqui")
      consultor.id = parseInt((document.getElementById('id') as HTMLInputElement).value);
      consultor.usuario.email = (document.getElementById('email') as HTMLInputElement).value;
      consultor.usuario.senha = (document.getElementById('senha') as HTMLInputElement).value;
      consultor.fornecedor.id = parseInt((document.getElementById('idFornecedor') as HTMLInputElement).value);
      consultor.precoHora = parseFloat((document.getElementById('precoHora') as HTMLInputElement).value);
      console.log(consultor)
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.post("/consultor/cadastrar", consultor, config);
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
            <p className="helvetica fonte_15 cor_5">Nome do consultor:</p>
            <input id="nome" type="text" placeholder="Nome completo..." />
            <p className="helvetica fonte_15 cor_5">Email:</p>
            <input id="email" type="text" placeholder="E-mail..."/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_5">ID:</p>
            <input id="id" type="text" placeholder="ID..."/>
            <p className="helvetica fonte_15 cor_5">Preço das horas:</p>
            <input id="precoHora" type="number" min="0" max="10000" step="1" placeholder="R$"/>
          </div>

          <div className="line">
            <p className="helvetica fonte_15 cor_5">Senha:</p>
            <input id="senha" type="password" placeholder="senha..."/>
            <p className="helvetica fonte_15 cor_5">ID do Fornecedor:</p>
            <input id="idFornecedor" type="texte" placeholder="ID do fornecedor..."/>
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
