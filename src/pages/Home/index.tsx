import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Content_cards, ContFilter, Container, Content_not, ContainerSearch } from './style';

import { FiChevronRight, FiSearch} from "react-icons/fi";
import api from '../../services/api';
import Notifications from '../../components/Notifications';
import NaoEncontrado from '../../components/NaoEncontrado';

interface Card {
  id: number;
  nome: string;
  dataInicio: string;
  dataFinalizacao: string;
  horasPrevistas: number;
  horasTrabalhadas: number;
  valor: number;
  valorRestante: number;
  status: string;
  barraProgresso: number;
}

const Home: React.FC = () => {
  const [valores, setValores ] = useState<Card[]>([]);
  const [filtroString, setFiltroString] = useState("");
  const [filtroPorStatus, setFiltroPorStatus] = useState(0);
  const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');
    if (usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
      }
  });

  async function carregaPadrao(): Promise<void> {
    await api.get(`projetos/listar/${perfil.secao.id}`, config).then(response => {
      setValores(response.data)
    })
  }
  async function filtrarPorString(): Promise<void> {
    await api.get(`projetos/buscar/nome/${perfil.secao.id}/${filtroString}`, config).then(response => {
      setValores(response.data)
    })
  }
  async function filtrarPorStatus(): Promise<void> {
    await api.get(`projetos/buscar/status/${perfil.secao.id}/${filtroPorStatus}`, config).then(response => {
      setValores(response.data)
    })
  }
  async function filtrarPorStatusAndFiltro(): Promise<void> {
    await api.get(`projetos/buscar/nomeestatus/${perfil.secao.id}/${filtroString}/${filtroPorStatus}`, config).then(response => {
      setValores(response.data)
    })
  }
  async function alterTypeStatus(params: number) {
      setFiltroPorStatus(params)
  }

  useEffect(() => {
    console.log(filtroPorStatus, filtroString)
    if (filtroString.trim() == "" && filtroPorStatus == 0) {
      carregaPadrao();
      return
    }

    if (filtroString.trim() == "" && filtroPorStatus != 0) {
      filtrarPorStatus();
      return
    }

    if (filtroString.trim() != "" && filtroPorStatus == 0) {
      filtrarPorString();
      return
    }

    filtrarPorStatusAndFiltro()

  }, [filtroString, filtroPorStatus])


   return (
    <>
      <Header/>
      <Filtros>
        <div className="content_title">
          <div className="arrow">
            <FiChevronRight size="15px" color="#00579E"/>
          </div>
          <div className="cor_5">
            Projetos
          </div>
        </div>

        <Container>
          <div className="arrow">
            <FiChevronRight size="15px" color="#00579E"/>
          </div>

          <div className="texto cor_5">
              Status:
          </div>
          <ContFilter>
            <div className="lang-menu">
              <div className="selected-lang">
                {
                  filtroPorStatus === 0 ? "Todos" :
                  filtroPorStatus === 1 ? "Atrasados" :
                  filtroPorStatus === 2 ? "Concluidos" :
                  filtroPorStatus === 3 ? "Andamentos" :
                  "Nao iniciados"
                }
              </div>
              <ul>
                <li>
                  <a className="de" onClick={() => alterTypeStatus(0)}>Todos</a>
                </li>
                <li>
                  <a className="br" onClick={() => alterTypeStatus(3)}>Andamentos</a>
                </li>
                <li>
                  <a className="en" onClick={() => alterTypeStatus(1)}>Atrasados</a>
                </li>
                <li>
                  <a className="fr" onClick={() => alterTypeStatus(2)}>Concluídos</a>
                </li>
                <li>
                  <a className="fr" onClick={() => alterTypeStatus(4)}>Não Iniciado</a>
                </li>
              </ul>
            </div>
          </ContFilter>
        </Container>

        <ContainerSearch className="content_procurar">
          <div className="arrow">
            <FiChevronRight size="15px" color="#00579D"/>
          </div>

          <div className="texto cor_5">
              Procurar:
          </div>

          <form>
            <input
              className="procurar cor_0"
              type="text"
              placeholder="Nome do projeto"
              onChange={event => setFiltroString(event.target.value)}
              value={filtroString}
            />
            <button type="submit" className="cor_6f">
              <FiSearch size={15}/>
            </button>
          </form>
      </ContainerSearch>
      </Filtros>

      <All>
        <Content_not>

          <Notifications/>

        </Content_not>

        <Content_cards>
          {
            valores.length > 0 ? valores.map(valor => (
            <Cards
              id={valor.id}
              key={valor.id}
              barraProgresso={valor.barraProgresso}
              dataFinalizacao={valor.dataFinalizacao}
              dataInicio={valor.dataInicio}
              horasPrevistas={valor.horasPrevistas}
              horasTrabalhadas={valor.horasTrabalhadas}
              status={valor.status}
              valor={valor.valor}
              valorRestante={valor.valorRestante}
              nome={valor.nome}
            />
            ))
            : <NaoEncontrado/>
          }
        </Content_cards>

        <Menu/>
      </All>
    </>
  );
};

export default Home;