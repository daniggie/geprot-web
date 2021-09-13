import React, {useEffect, useState} from "react";
import { All } from "./style";
import Barra from "../../components/Barra";
import InformationsAprovar from "../../components/Informations/InformationsAprovar";
import { useParams } from "react-router";
import api from "../../services/api";


interface Card {
  id: number;
  nome: string;
}

const AprovarHoras: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valores, setValores ] = useState<Card>();

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      await api.get(`projetos/listar/projetos/${id ? id : null}`).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ ])
  console.log(valores)

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Logistica:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});


    return(
      <>
      <Barra />

      <All>

        <p className="helvetica cor_0 lighter fonte_20">Seção {secao.secao.id}</p>
        <p className="helvetica cor_3 lighter fonte_25">{valores?.id} -  {valores?.nome}</p>

        <div className="table">

          <div className="header">
            <div className="title1">
              <p className="helvetica bold cor_0">Cadastro</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Nome Completo</p>
            </div>

            <div className="title2">
              <p className="helvetica bold cor_0">Fornecedor</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Aprovação</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0">Horas</p>
            </div>

            <div className="title1">
              <p className="helvetica bold cor_0"></p>
            </div>

          </div>

          <div className="content_informations">
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
            <InformationsAprovar />
          </div>

        </div>

      </All>
      </>
    );
};

export default AprovarHoras;
