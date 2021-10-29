import React, {useState, useEffect} from 'react';
import { Titulo, Formulario } from './style';
import { BsFillCaretRightFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";
import BotaoCancel from '../../../components/Buttons/ButtonCancel';
import Header from '../../../components/Header';
import api from '../../../services/api';

interface Secao {
  id: number;
  nome: string;
  taxa: number;
}

const Cadastrar4: React.FC = () => {
  const [ valor, setValor ] = useState<Secao[]>([]);
  const [ secoes, setSecoes ] = useState<Secao[]>([]);

  useEffect(() => {
    async function carregaDados(): Promise<void>{
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`secao/listar`, config).then(response => {
        setValor(response.data);
      })
    }
    carregaDados();
  });

  const [projetoSalvo] = useState(() => {
    let projeto = localStorage.getItem('@Geprot:cadastrar');

    if (projeto) {
        let languageObject = JSON.parse(projeto);
        return languageObject;
      }
    });
    
    const projeto = {
      nome: "",
      nomeSolicitante: "",
      dataFinalizacao: "",
      dataInicio: "",
      nomeResponsavel:"",
      consultores: [ 
        {
          consultorId: 0,
          quantidadeHoras: 0
        }
      ],
      ccpagantes: [
        {
          secaoId: 1,
          taxa: 100
        }
      ] 
    }
  projeto.ccpagantes.shift();

  const Cadastrar = () => {
    projeto.nome = projetoSalvo.nome;
    projeto.nomeResponsavel = projetoSalvo.nomeResponsavel;
    projeto.dataFinalizacao = projetoSalvo.dataFinalizacao;
    projeto.dataInicio = projetoSalvo.dataInicio;
    projeto.nomeSolicitante = projetoSalvo.nomeSolicitante;
    projeto.consultores =  projetoSalvo.consultores;
    for(let i = 0; i < secoes.length; i++){
      projeto.ccpagantes.push(
        {
          secaoId: secoes[i].id,
          taxa: secoes[i].taxa
        }
      )
    }
    console.log(JSON.stringify(projeto))
    localStorage.setItem('@Geprot:cadastrar',JSON.stringify(projeto));
    console.log(projeto)
  }

  const adcionarListaSecao = () => {

    const idSecao = (document.getElementById('id') as HTMLInputElement).value;

    const pegaNome = async () => {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await api.get<Secao>(`/secao/buscar/${idSecao}`,config);
      const secao = response.data;

      const card:Secao = {
        id: parseInt(idSecao),
        nome: secao.nome,
        taxa: parseInt((document.getElementById('taxa') as HTMLInputElement).value)
      }
      setSecoes([...secoes, card]);
      (document.getElementById('id') as HTMLInputElement).value ='';
      (document.getElementById('taxa') as HTMLInputElement).value='';
    }
    pegaNome();
  };

  return (
    <>
      <Header/>

      <Titulo>
        <p className="helvetica fonte_20 cor_5 bold">CENTRO DE CUSTOS</p>
      </Titulo>
      <Titulo>
        <a href="/cadastrar"><b className="helvetica fonte_15 cor_0">Cadastro de projetos</b></a>
        <BsFillCaretRightFill color="#828282"/>
        <b className="helvetica fonte_15 cor_5 normal"> <u> Centro de custos </u> </b>
      </Titulo>
        <Formulario>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Centros de Custos:</b>
            </div>

            <div className="contCC">
              {valor.map(secao => (
                <div className="column1">
                {secao.nome} - {secao.id}
              </div>
              ))}
            </div>

          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_15 cor_5 bold">Centro de custo:</b>
              <b className="helvetica fonte_15 cor_5 bold">Percentual aprovado:</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <input id="id" type="text" placeholder="Digite o id aqui..."/>
              </div>
              <div className="tamanho2">
                <input id="taxa" type="number" placeholder="%"/>
              </div>
              <div className="box cor_6f" onClick={adcionarListaSecao}>
              <RiAddLine color="#fff"/>
              </div>

            </div>

            <div className="table">

              <div className="header">
                <div className="title1 bold helvetica cor_0 fonte_15">
                  Centro de custo
                </div>
                <div className="title2 bold helvetica cor_0 fonte_15">
                    Percentual
                </div>
              </div>

              {secoes.map(secao => (
              <div className="columns helvetica cor_0 lighter">
                <div className="column1">
                  <div className="box cor_6f">
                    <FiX color="#fff"/>
                  </div>
                  {secao.nome}
                </div>

                <div className="column2">
                  {secao.taxa}%
                </div>
              </div>
              ))}


            </div>
          </div>

          <div className="position">
            <a href="/home">
              <BotaoCancel>
              </BotaoCancel>
            </a>
            <a onClick={Cadastrar} href="/cadastrar3">
                  <div className="button">
                    <p className="helvetica fonte_20 bold">Próximo</p>
                  </div>
            </a>
          </div>
        </Formulario>

        </>
    );
}
export default Cadastrar4;
