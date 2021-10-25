import React, {useEffect, useState} from "react";
import Header from "../../../components/Header";
import { Content, All, PositionMenu, Table } from "./style";
import { RiFilterFill, RiFilterOffFill } from "react-icons/ri";
import Menu from "../../../components/Menu";
import Informations from "../../../components/Informations/InformationsAlocarFuncionario";
import { useParams } from "react-router";
import api from "../../../services/api";

interface Consultor {
  id: number;
  usuario: {
    id: number;
    nome: string;
    email: string;
    dataCadastro: Date;
    status: string;
  };
  fornecedor: {
    id: number;
    nome: string;
    email: string;
  };
  precoHora: number ;
}


const AlocarAtribuirFuncionario: React.FC = () => {
  const [pesquisaPorNome, setPesquisaPorNome] = useState("");
  const [pesquisaPorNomeResponsavel, setPesquisaPorNomeResponsavel] = useState("");
  const [pesquisaId, setPesquisaId] = useState("")
  const { id }: {id:string} = useParams();
  const [ consultor, setConsultor ] = useState<Consultor>();

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`consultor/buscar/${id}`, config).then(response => {
        setConsultor(response.data);
      })
    }
    carregaDados();
  }, []);


  return(
    <>
    <Header />
    <All>
        <Content>

          <div className="funcionario">

            <div className="line">
              <p className="helvetica bold cor_0 fonte_20"> {consultor?.usuario.nome} </p>

              <p className="helvetica bold cor_5 fonte_15"> STATUS: {consultor?.usuario.status}</p>
            </div>

            <div className="line">
              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Cadastro: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> {consultor?.id} </p>
              </div>

              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Data do cadastro: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> {consultor?.usuario.dataCadastro} </p>
              </div>
            </div>

            <div className="line">
            <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Fornecedor: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> {consultor?.fornecedor.nome} </p>
              </div>

              <div className="col">
                <p className="helvetica lighter cor_0 fonte_15"> Valor da hora: </p>
              </div>

              <div className="col">
                <p className="helvetica bold cor_0 fonte_15"> R$ {consultor?.precoHora} </p>
              </div>
            </div>

            <div className="line">
            <div className="col">
                <b className="helvetica lighter cor_0 fonte_15"> Email do Consultor: </b>
                <b className="helvetica bold cor_0 fonte_15"> {consultor?.usuario.email} </b>
              </div>

              <div className="col">

              </div>

            </div>

            <div className="line">
              <div className="col">
                <b className="helvetica lighter cor_0 fonte_15"> Email do fornecedor: </b>
                <b className="helvetica bold cor_0 fonte_15"> {consultor?.fornecedor.email} </b>
              </div>

              <div className="col">
              </div>
            </div>
          </div>

          <div className="header_filtros">
            <b className="helvetica fonte_15 cor_5 bold"> Filtros </b>
            <hr className="cor_6f"/>
          </div>

          <div className="filters">
            <div className="cols">

              <div className="cols1">
                <b className="helvetica fonte_15 cor_5 normal"> ID Projeto: </b>
              </div>

              <div className="cols2">
                <input
                  type="number"
                  placeholder="000000"
                  onChange={event => setPesquisaId(event.target.value)}
                  value={pesquisaId}
                />
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_5 normal"> Nome projeto: </b>
              </div>

              <div className="cols2">
                <input 
                  type="text" 
                  placeholder="Nome do projeto..."
                  onChange={event => setPesquisaPorNome(event.target.value)}
                  value={pesquisaPorNome}
                />
              </div>

              <div className="cols1">
              <b className="helvetica fonte_15 cor_5 normal"> Responsavel projeto: </b>
              </div>

              <div className="cols2">
                <input 
                  type="text" 
                  placeholder="Nome do projeto..."
                  onChange={event => setPesquisaPorNomeResponsavel(event.target.value)}
                  value={pesquisaPorNomeResponsavel}
                />
              </div>

              <div className="colsicon">
                <RiFilterOffFill color="#00579D" size={25}/>
              </div>
            </div>

            <div className="cols">

              <div className="cols1">
              </div>

              <div className="cols2">
              </div>

              <div className="cols1">
              </div>

              <div className="cols2">
              </div>

              
            </div>
          </div>

          <Table>

              <div className="header">
                <div className="title1">
                  <p className="helvetica bold cor_0">Número</p>
                </div>

                <div className="title2">
                  <p className="helvetica bold cor_0">Título do projeto</p>
                </div>

                <div className="title2">
                  <p className="helvetica bold cor_0">Responsável</p>
                </div>

                <div className="title1">
                  <p className="helvetica bold cor_0">Criação</p>
                </div>

                <div className="title1">
                  <p className="helvetica bold cor_0"> Atribuição </p>
                </div>

              </div>

              <div className="contant_informations">
                <Informations
                  pesquisaId={pesquisaId}
                  pesquisarPorNome={pesquisaPorNome}
                  pesquisaPorNomeResponsavel={pesquisaPorNomeResponsavel}
                />
              </div>

          </Table>



        </Content>

        <PositionMenu>
          <Menu/>
        </PositionMenu>
  </All>
    </>
  )
}

export default AlocarAtribuirFuncionario;
