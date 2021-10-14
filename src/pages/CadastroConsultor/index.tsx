import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import api from "../../services/api";
import { useHistory } from "react-router";
import InputRegister from "../../components/InputRegister";

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

          <div className="column">
            <div className="line">
              <p className="helvetica fonte_15 cor_5">Nome do consultor:</p>
              <InputRegister name="nomeConsultor" placeholder="Digite o nome..."/>
              <div className="spanError">Erro</div>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">Email:</p>
              <InputRegister name="email" placeholder="Digite o email..."/>
              <div className="spanError">Erro</div>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">Senha:</p>
              <InputRegister name="senha" placeholder="Digite a senha..."/>
              <div className="spanError">Erro</div>
            </div>
          </div>

          <div className="column">
            <div className="line">
              <p className="helvetica fonte_15 cor_5">ID do Consultor:</p>
              <InputRegister name="idConsultor" placeholder="Digite o ID..."/>
              <div className="spanError">Erro</div>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">Preço das horas:</p>
              <InputRegister name="price" placeholder="Digite o preço..."/>
              <div className="spanError">Erro</div>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">ID do Fornecedor:</p>
              <InputRegister name="idForcenedor" placeholder="Digite o ID..."/>
              <div className="spanError">Erro</div>
            </div>
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
