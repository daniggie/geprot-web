import React, {useState, useEffect} from "react";
import { Content } from "./style";
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";
import IconeAprovamento from "../../IconeAprovamento";
import api from "../../../services/api";
import { useParams } from "react-router";

interface Card {
  todosApontamentos: [
    {
      data: string;
      descricao_trabalho: string;
      quantidade_horas: number;
      status: string;
    }
  ],
}

const InformationsApFuncionario: React.FC = () => {
  const { id }: {id:string} = useParams();
  const { consultorId }: {consultorId:string} = useParams();
  const [valores, setValores ] = useState<Card>();

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      await api.get(`horas/listar/${id}/${consultorId}`).then(response => {
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

    return (
        <>
        {
          valores?.todosApontamentos.map(valor => (
        <Content>
            <div className="columns">
                <div className="column">
                    <p className="helvetica light fonte_15 cor_0">{valor.data}</p>
                </div>

                <div className="column">
                    <p className="helvetica light fonte_15 cor_0"> {valor.quantidade_horas}h</p>
                </div>

                <div className="column2">
                    <p className="helvetica light fonte_15 cor_0">{valor.descricao_trabalho}</p>
                </div>


                <div className="column">
                <p className="helvetica light fonte_15 cor_0"> <IconeAprovamento status={valor.status} /></p>
                </div>

            </div>
        </Content>
        ))}
        </>
    )
};

export default InformationsApFuncionario;
