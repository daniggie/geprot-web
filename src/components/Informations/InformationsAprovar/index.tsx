import React, {useState, useEffect} from "react";
import { Content } from "./style";
import IconeAprovamento from "../../IconeAprovamento";
import api from "../../../services/api";
import { useParams } from "react-router";
import { CgSearchLoading } from "react-icons/cg";

interface Colaboradores {
  consultor_id: number;
  nome: string;
  status: string;
  horasTotais: number;
  quantidade_horas: number;
}

const InformationsAprovar: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valores, setValores ] = useState<Colaboradores[]>([]);

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`horas/listar/${id ? id : null}`,config).then(response => {
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

const linkAprovarHoras = "/aprovarfuncionario/"
    return (
        <>
        {
          valores.map(valor => (
        <Content>
            <div className="columns">
            <div className="column1">
                <p className="helvetica light fonte_15 cor_0">{valor.consultor_id}</p>
            </div>

            <div className="column2">
            <p className="helvetica light fonte_15 cor_0">{valor.nome}</p>
            </div>

            <div className="column2">
            <p className="helvetica light fonte_15 cor_0">Providers name</p>
            </div>

            <div className="column1">
            <p className="helvetica light fonte_15 cor_0"> <IconeAprovamento status={valor.status}/></p>
            </div>

            <div className="column1">
            <b className="helvetica light fonte_15 cor_0 lighter">{valor.horasTotais}h</b>
            <b className="line cor_6f"></b>
            <b className="helvetica light fonte_15 cor_0 lighter">{valor.quantidade_horas}h</b>
            </div>

            <div className="column1">
            <p className="helvetica light fonte_15 cor_0">
                <a href={linkAprovarHoras + id + "/" + valor.consultor_id}>
                <CgSearchLoading size={25} color="#0091BD"/>
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
