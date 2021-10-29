import React, {useState, useEffect  } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { All, Content } from "./style";
import {FiToggleLeft, FiToggleRight} from "react-icons/fi";
import {HiEye, HiEyeOff} from "react-icons/hi"
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import tamanhoFonte from "../../components/js/fontSize";

interface Gestor {
  id: number,
  secao: {
    id: number,
    nome: string
  },
  usuario: {
    id: number,
    nome: string,
    email: string,
    senha: string,
    dataCadastro: string,
    status: string
  }
}

const Configuracao: React.FC = () => {
  const [gestor, setGestor] = useState<Gestor>();
  const history = useHistory();
  const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
  });

  async function carregaPadrao(): Promise<void> {
    alert("Chegou aqui")
    api.get(`/gestor/buscar/${perfil.id}`, config).then(response => {
      setGestor(response.data)
    })
  }

  const [enableTalk, setEnableTalk] = useState(false);
  const handleClickTalk = (e:any) => {
    e.preventDefault()
    setEnableTalk(!enableTalk);
  };

  const [enableNotify, setEnableNotify] = useState(false);
  const handleClickNotify = (e:any) => {
    e.preventDefault()
    setEnableNotify(!enableNotify);
  };

  const [showPass, setShowPass] = useState(false);
  const handleClickEye = (e:any) => {
    e.preventDefault()
    setShowPass(!showPass)
  };

const [nome, setNome] = useState(perfil.usuario.nome);
const [senha, setSenha] = useState(perfil.usuario.senha);

async function salva() {
  if(nome.trim() != perfil.usuario.nome){
    api.put(`/gestor/editar/nome/${perfil.id}/${nome}`, nome, config)
  }
  api.put(`/gestor/editar/senha/${perfil.id}/${senha}`, senha, config);
  carregaPadrao();
  carregaPadrao();
  localStorage.setItem("@Geprot:gestor", JSON.stringify(gestor));
  alert("Deu boa")
  history.push("/home")
}

  return (
    <>
      <Header/>
      <All>

        <Content>
          <div className="config">

            <div className="line">
              <p className="helvetica fonte_20 cor_5 bold">CONFIGURAÇÕES</p>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1 className="helvetica fonte_20 cor_5 bold">Configurações de texto</h1>
              <div className="cont_option">
                <div className="line_option">
                  <h3>Tamanho da fonte</h3>
                  <div className="switch_font">
                    <div className="lang-menu">
                      <div className="selected-lang">
                        Normal
                      </div>
                      <ul>
                        <li>
                          <a className="font" onClick={() => tamanhoFonte("small")}>Pequena</a>
                        </li>
                        <li>
                          <a className="font" onClick={() => tamanhoFonte("medium")}>Média</a>
                        </li>
                        <li>
                          <a className="font" onClick={() => tamanhoFonte("big")}>Grande</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1 className="helvetica fonte_20 cor_5 bold">Acessibilidade</h1>
              <div className="cont_option">
                <div className="line_option">
                  <h3>TalkBack</h3>
                  <div>
                    {enableTalk ? (<FiToggleRight size={35} color="#00579D" onClick={handleClickTalk}/>) : (<FiToggleLeft color="#828282" size={35} onClick={handleClickTalk}/>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>

            <div className="cont_setings">
              <h1 className="helvetica fonte_20 cor_5 bold">Configurações da conta</h1>
              <div className="cont_option">
                <div className="line_option">
                  <h3>Alterar nome de usuário</h3>
                  <input type="text" id="nome" value={nome}  onChange={event => setNome(event.target.value)}/>
                </div>
                <div className="line_option">
                  <h3>Alterar sua senha</h3>
                  <input type={ showPass ? "text" : "password"} id="senha" value={senha} onChange={event => setSenha(event.target.value)}/>
                  <div className="login_eye">
                    {showPass ? (<HiEye size={15} color="#00579D" onClick={handleClickEye}/>) : (<HiEyeOff color="#828282" size={15} onClick={handleClickEye}/>)}
                  </div>
                </div>
                <div className="line_option">
                  <h3>Alterar foto de perfil</h3>
                  <button>Escolher</button>
                </div>
                <div className="line_option">
                  <h3>Desativar notificações</h3>
                  <div>
                    {enableNotify ? (<FiToggleRight size={35} color="#00579D" onClick={handleClickNotify}/>) : (<FiToggleLeft color="#828282" size={35} onClick={handleClickNotify}/>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="line_div"></div>
              <div className="position">
              <button onClick={() => salva()}>
                <p>Salvar</p>
              </button>
              </div>
          </div>
        </Content>
        <Menu/>
      </All>
    </>
  )
};

export default Configuracao;
