import React, { useState, useEffect } from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import InformationsApFuncionario from "../../components/Informations/InformationsAprovarFuncionario";
import arrowleft from "../../icons/arrowleft.svg";
import BotaoEnviar from "../../components/Buttons/ButtonSend";
import api from "../../services/api";
import { useParams } from "react-router";
import ButtonAprove from "../../components/Buttons/ButtonAprove";

interface Card {
  totalHoras: number;
  valorGasto: number;
  nome: string;
}

const AprovarFuncionario: React.FC = () => {

  const [ overlay, setOverlay ] = useState(true);
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

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`horas/listar/${id}/${consultorId}`, config).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ ])
  console.log(valores)

  async function aprovar(): Promise<void> {
    api.put(`horas/aprovar/${id}/${consultorId}`)
  }

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});

const linkVoltar = "/aprovarhoras/"

    return(
      <>
      <Barra />

      <All overlay={overlay}>

        <p className="helvetica cor_0 lighter fonte_20">Seção {secao.secao.nome}</p>
        <p className="helvetica cor_5 lighter fonte_25">{id} - {valores?.nome}</p>

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
              <InformationsApFuncionario />
              <InformationsApFuncionario />
            </div>

            <div className="header">
            <div className="title2">
              <p className="helvetica bold cor_0 lighter">Total de Horas trabalhadas: </p>
              <b className="helvetica cor_5 fonte_22">{valores?.totalHoras} H</b>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0 lighter">Valor gasto: </p>
              <b className="helvetica cor_5 fonte_22">R$ {valores?.valorGasto}</b>
            </div>
          </div>

        </div>

        <div className="position">
              <div className="botaorecuse" onClick={addOverlay}>
                <p className="helvetica lighter cor_0">Recusar</p>
              </div>
              <a href={linkVoltar + id} onClick={aprovar}>
                <ButtonAprove />
              </a>
        </div>

        <div id="recusado">
          <div className="overlay">
            <img src={arrowleft} alt="" onClick={addOverlay}/>
            <p className="helvetica cor_5 fonte_20">Qual o motivo do recusamento de horas?</p>
            <textarea placeholder="Insira seu motivo aqui..."></textarea>
            <BotaoEnviar/>

          </div>
        </div>

      </All>

      </>
    );
};

export default AprovarFuncionario;
