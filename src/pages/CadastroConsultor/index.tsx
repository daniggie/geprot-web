import React, {useRef, useCallback, useState, useEffect} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Container } from "./style"
import BotaoCancel from "../../components/Buttons/ButtonCancel";
import {api} from "../../services/api";
import { useHistory } from "react-router";
import InputRegister from "../../components/InputRegister";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import ButtonRegister from "../../components/Buttons/ButtonRegister";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { HiEye, HiEyeOff } from "react-icons/hi";
import {MenssagemErro, MenssagemSucesso} from "../../hooks/toast";

interface Consultor {
  id: number,
  usuario: {
    nome: string,
    email: string,
    senha: string,
  },
  fornecedor: {
    id: number,
  },
  precoHora: number,
}

interface Skills {
  id: number,
  nome: string
}

const CadastrarConsultor: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [emailConsultor, setEmailConsultor] = useState("");
  const [nomeConsultor, setNomeConsultor] = useState("");
  const [senha, setSenha] = useState("");
  const [precoHoras, setPrecoHoras] = useState("")
  const [idFornecedor, setIdFornecedor] = useState(0)

  const history = useHistory();

  useEffect(() =>{
    async function listarSkills():Promise<void>{
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`consultor/skills`, config).then(response => {
        setSkills(response.data);
      })
    }
    listarSkills();
  });

  useEffect(() => {
    consultor.usuario.nome = nomeConsultor
    consultor.usuario.email = emailConsultor
    consultor.usuario.senha = senha
    consultor.fornecedor.id = idFornecedor
    consultor.precoHora = precoHoras
  }, [idFornecedor, nomeConsultor, emailConsultor, senha, precoHoras])

  const consultor = {
    id: 0,
    usuario: {
      nome: "",
      email: "",
      senha: ""
    },
    fornecedor: {
      id: 0,
    },
    precoHora: "",
  }


  const cadastrarConusltor = useCallback( async (data: Consultor) => {
    try{
      formRef.current?.setErrors({})

      consultor.usuario.nome = (document.getElementById('nome') as HTMLInputElement).value;
      consultor.id = parseInt((document.getElementById('id') as HTMLInputElement).value);
      consultor.usuario.email = (document.getElementById('email') as HTMLInputElement).value;
      consultor.usuario.senha = (document.getElementById('senha') as HTMLInputElement).value;
      consultor.fornecedor.id = parseInt((document.getElementById('idFornecedor') as HTMLInputElement).value);
 //     consultor.precoHora = parseFloat((document.getElementById('precoHora') as HTMLInputElement).value);                               
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const schema = Yup.object().shape({
        email: Yup.string()
        .required("E-mail obrigátorio")
        .email("Informe um e-mail válido"),
        senha:Yup.string().min(6, "No mínimo 6 dígitos"),
        nome: Yup.string()
        .required("O nome é obrigatório"),
        id: Yup.number()
        .typeError('O ID precisa ser um número')
        .required("O ID é obrigatório")
        .positive("O ID não pode ser negativo")
        .integer("Informe um ID inteiro"),
        idFornecedor: Yup.number()
        .typeError('O ID precisa ser um número')
        .required("O ID é obrigatório")
        .positive("O ID não pode ser negativo")
        .integer("Informe um ID inteiro"),
        precoHora: Yup.number()
        .typeError('A hora precisa ser um número')
        .required("A hora é obrigatória")
        .positive("A hora não pode ser negativa")
      })

      await schema.validate(data, {
        abortEarly: false,
      })  

      await api.post("/consultor/cadastrar", consultor, config);

      MenssagemSucesso("Consultor cadastrado com sucesso")

      history.push('/home')

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return
      }
      
      MenssagemErro("Erro ao cadastrar um consultor, cheque os campos preenchidos")

    }
  }, [history]);

  const [showPass, setShowPass] = useState(false);
  const handleClickPass = (e:any) => {
    e.preventDefault()
    setShowPass(!showPass)
  };

  return (
    <>
    <Header />
      <All>
        <Container>
          <div className="title">
            <b className="helvetica fonte_20 cor_5">CADASTRO DE CONSULTOR</b>
          </div>
          <Form ref={formRef} onSubmit={cadastrarConusltor}>
            <div className="container_square">

              <div className="column">
                <div className="line">
                  <p className="helvetica fonte_15 cor_5 bold">Nome do consultor:</p>
                  <InputRegister name="nome" id="nome" placeholder="Digite o nome..."/>
                </div>

                <div className="line">
                  <p className="helvetica fonte_15 cor_5 bold">Email:</p>
                  <InputRegister name="email" id="email" placeholder="Digite o email..."/>
                </div>

                <div className="line">
                  <p className="helvetica fonte_15 cor_5 bold">Senha:</p>
                  <InputRegister name="senha" id="senha" type={showPass ? "text" : "password"} placeholder="Digite a senha..."/>
                  <div className="login_eye">
                    {showPass ? (<HiEye size={25} color="#00579E" onClick={handleClickPass}/>) : (<HiEyeOff color="#e1dcda" size={25} onClick={handleClickPass}/>)}
                  </div>
                </div>

                <div className="line">
                  <p className="helvetica fonte_15 cor_5 bold">Preço das horas:</p>
                  <InputRegister name="precoHora" value={precoHoras} onChange={event => setPrecoHoras(event.target.value)} id="precoHora" type="number" placeholder="Digite o preço..."/>
                </div>
              </div>

              <div className="column">
                <div className="lineSkills">
                  <p className="helvetica fonte_15 cor_5 bold">Habilidades:</p>
                  <div className="columns helvetica cor_0 lighte'r" >
                    {skills.map(skills => (
                      <div className="column1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value=""/>
                        <label>{skills.nome}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="line">
                  <p className="helvetica fonte_15 cor_5 bold">ID do Fornecedor:</p>
                  <InputRegister name="idFornecedor" id="idFornecedor" placeholder="Digite o ID..."/>
                </div>
              </div>

              <div className="position">
                <BotaoCancel/>
                <ButtonRegister type="submit">Cadastrar</ButtonRegister>
              </div>
            </div>
          </Form>
        </Container>
        <Menu/>
      </All>
    </>
  )
};

export default CadastrarConsultor;
