import React, {useState, useEffect} from "react";
import { Content } from "./style";
import IconeAprovamento from "../../IconeAprovamento";
import api from "../../../services/api";
import { useParams } from "react-router";
import { CgSearchLoading } from "react-icons/cg";

interface Colaboradores {
  id: number;
  nome: string;
  statusApontamento: string;
  horasApontadas: number;
  limiteHoras: number;
  fornecedor: {
    nome: string;
  }
}

const InformationsAprovar: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valores, setValores ] = useState<Colaboradores[]>([]);
  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Logistica:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
  });
  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`horas/${id ? id : null}`,config).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ valores ])



  const linkAprovarHoras = "/aprovarfuncionario/"

    return (
        <>
        {
          valores.map(valor => (
        <Content>
            <div className="columns">
            <div className="column1">
                <p className="helvetica light fonte_15 cor_0">{valor.id}</p>
            </div>

            <div className="column2">
                <p className="helvetica light fonte_15 cor_0">{valor.nome}</p>
            </div>

            <div className="column2">
                <p className="helvetica light fonte_15 cor_0">{valor.fornecedor.nome}</p>
            </div>

            <div className="column1">
                <p className="helvetica light fonte_15 cor_0"> <IconeAprovamento status={valor.statusApontamento}/></p>
            </div>

            <div className="columnHours">
                <div className="helvetica light fonte_15 cor_0 lighter">{valor.horasApontadas}h</div>
                <div className="line cor_6f"></div>
                <div className="helvetica light fonte_15 cor_0 lighter">{valor.limiteHoras}h</div>
            </div>

            <div className="column1">
            <p className="helvetica light fonte_15 cor_0">
                <a href={linkAprovarHoras + id + "/" + valor.id}>
                <CgSearchLoading size={25} color="#00579E"/>
                </a>
            </p>
            </div>

            </div>
        </Content>
        ))}
        </>
    )
};

export default InformationsAprovar;
