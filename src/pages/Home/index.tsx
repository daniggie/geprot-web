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
  dataCadastro: string;
  horasPrevistas: number;
  horasTrabalhadas: number;
  valor: number;
  valorUtilizado: number;
  valorRestante: number;
  status: string;
  barraProgresso: number;
}

const Home: React.FC = () => {
  const [valores, setValores ] = useState<Card[]>([]);
  const [filtro, setFiltro] = useState("");
  let filtroPorStatus = 0;
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
      await api.get(`projetos/listar/${perfil.secao.id}/${filtro}`, config).then(response => {
        setValores(response.data)
      })
  }

  useEffect(() => {
    carregaPadrao()
  }, [])

  useEffect(() => {
    filtrarPorString()
  }, [filtro])


   return (

    <>
      <Header/>
      <Filtros>
        <div className="content_title">
          <div className="arrow">
            <FiChevronRight size="15px" color="#00579E"/>
          </div>
          <div className="texto cor_5">
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
                Todos
              </div>
              <ul>
                <li>
                  <a className="de">Todos</a>
                </li>
                <li>
                  <a className="br">Andamentos</a>
                </li>
                <li>
                  <a className="en">Atrasados</a>
                </li>
                <li>
                  <a className="fr">Concluídos</a>
                </li>
                <li>
                  <a className="fr">Não Iniciado</a>
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
              placeholder="nome do projeto"
              onChange={event => setFiltro(event.target.value)}
              value={filtro}
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
            valores ? valores.map(valor => (
            <Cards
              id={valor.id}
              key={valor.id}
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
;
