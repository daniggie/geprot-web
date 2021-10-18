import React, {useState, useEffect} from "react";
import { Content } from "./style";
import IconeAprovamento from "../../IconeAprovamento";
import api from "../../../services/api";
import { useParams } from "react-router";

interface Card {
  horas: [
    {
      data: string;
      descricaoTrabalho: string;
      quantidadeHoras: number;
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
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`horas/${id}/${consultorId}`,config).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ ])
  console.log(valores)

    return (
        <>
        {
          valores?.horas.map(valor => (
        <Content>
            <div className="columns">
                <div className="column">
                    <p className="helvetica light fonte_15 cor_0">{valor.data}</p>
                </div>

                <div className="column">
                    <p className="helvetica light fonte_15 cor_0"> {valor.quantidadeHoras}h</p>
                </div>

                <div className="column2">
                    <p className="desc1 helvetica light fonte_15 cor_0">{valor.descricaoTrabalho}</p>
                    <p className="desc2 helvetica light fonte_15 cor_0">{valor.descricaoTrabalho}</p>
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
