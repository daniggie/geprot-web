import React, {useRef} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import api from "../../services/api";
import { useHistory } from "react-router";
import InputRegister from "../../components/InputRegister";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

const Configuracao: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

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
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
        .required("E-mail obrigátorio")
        .email("Informe um e-mail válido"),
        senha:Yup.string().min(6, "No mínimo 6 dígitos"),
        nomeConsultor: Yup.string()
        .required("O nome é obrigatório"),
      });

      consultor.usuario.nome = (document.getElementById('nomeConsultor') as HTMLInputElement).value;
      console.log("chegou até aqui")
      consultor.id = parseInt((document.getElementById('id') as HTMLInputElement).value);
      consultor.usuario.email = (document.getElementById('email') as HTMLInputElement).value;
      consultor.usuario.senha = (document.getElementById('senha') as HTMLInputElement).value;
      consultor.fornecedor.id = parseInt((document.getElementById('idFornecedor') as HTMLInputElement).value);
      consultor.precoHora = parseFloat((document.getElementById('price') as HTMLInputElement).value);
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
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">Email:</p>
              <InputRegister name="email" placeholder="Digite o email..."/>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">Senha:</p>
              <InputRegister name="senha" placeholder="Digite a senha..."/>
            </div>
          </div>

          <div className="column">
            <div className="line">
              <p className="helvetica fonte_15 cor_5">ID do Consultor:</p>
              <InputRegister name="idConsultor" placeholder="Digite o ID..."/>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">Preço das horas:</p>
              <InputRegister name="price" placeholder="Digite o preço..."/>
            </div>

            <div className="line">
              <p className="helvetica fonte_15 cor_5">ID do Fornecedor:</p>
              <InputRegister name="idForcenedor" placeholder="Digite o ID..."/>
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
