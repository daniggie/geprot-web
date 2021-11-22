import React, { useState, useEffect } from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import InformationsApFuncionario from "../../components/Informations/InformationsAprovarFuncionario";
import arrowleft from "../../icons/arrowleft.svg";
import BotaoEnviar from "../../components/Buttons/ButtonSend";
import {api} from "../../services/api";
import { useParams } from "react-router";
import ButtonAprove from "../../components/Buttons/ButtonAprove";
import ButtonAprovado from "../../components/Buttons/ButtonAprovado";

interface Card {
  horasTotais: number;
  totalGasto: number;
  usuario: {
    nome: string
  },
  podeApontar: boolean
}

const AprovarFuncionario: React.FC = () => {
  const [ overlay, setOverlay ] = useState(true);
  const [textoRecusar, setTextoRecusar] = useState("");
  const addOverlay = () => {
    if(!overlay){
     setOverlay(true);
    }else{
      setOverlay(false);
    }

    return overlay;

  };
  const { id }: {id:string} = useParams();
  const { consultorId }: {consultorId:string} = useParams();
  const [valores, setValores ] = useState<Card>();

  const token = localStorage.getItem("@Geprot:token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    async function carregaDados(): Promise<void>  {

      await api.get(`horas/${id}/${consultorId}`, config).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ ])
  console.log(valores)

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});

  useEffect(() => {
    console.log(textoRecusar)
  }, [textoRecusar])

const linkVoltar = "/aprovarhoras/"

    return(
      <>
      <Barra />

      <All overlay={overlay}>
        <p className="helvetica cor_0 lighter fonte_20">Seção {secao.secao.nome}</p>
        <p className="helvetica cor_5 lighter fonte_25">{id} - {valores?.usuario.nome}</p>

        <div className="table">
          <div className="header">
            <div className="title">
              <p className="helvetica bold cor_0">Data</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Horas trabalhadas</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Descrição</p>
            </div>

            <div className="title">
              <p className="helvetica bold cor_0">Aprovação</p>
            </div>
          </div>

          <div className="informations">
            <InformationsApFuncionario />
          </div>

          <div className="header">
            <div className="titleRodape">
              <p className="helvetica bold cor_0 lighter"> Total de Horas trabalhadas: </p>
              <b className="helvetica cor_5 fonte_22">{valores?.horasTotais} H</b>
            </div>

            <div className="titleRodape2">
              <p className="helvetica bold cor_0 lighter">Valor gasto: </p>
              <b className="helvetica cor_5 fonte_22">R$ {valores?.totalGasto}</b>
            </div>
          </div>
        </div>

        <div className="position">
              <div className="botaorecuse" onClick={addOverlay}>
                <p className="helvetica lighter cor_0">Recusar</p>
              </div>
              <a>
                {console.log(valores)}
                {valores?.podeApontar == true ? <ButtonAprove projetoId={parseInt(id)} consultorId={parseInt(consultorId)}/> : <ButtonAprovado/>}
              </a>
        </div>

        <div id="recusado">
          <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Qual o motivo do recusamento de horas?</p>
            <textarea placeholder="Insira seu motivo aqui..." value={textoRecusar} onChange={event => setTextoRecusar(event?.target.value)}>
              
            </textarea>
            <BotaoEnviar projetoId={parseInt(id)} consultorId={parseInt(consultorId)} textoRecusar={textoRecusar}/>

          </div>
        </div>

      </All>

      </>
    );
};

export default AprovarFuncionario;
