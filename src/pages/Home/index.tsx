import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Content_cards, ContFilter, Container, Content_not } from './style';
import FilterSearch from '../../components/Filters/FilterSearch';

import { FiChevronRight } from "react-icons/fi";
import api from '../../services/api';
import Notifications from '../../components/Notifications';

let statusVar :number;

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

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});

  const [ status , setStatus ] = useState<number>();
  const addStatus = async (statusInt: number) => {
    setStatus(statusInt);
    const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await api.get(`projetos/listar/${secao.secao.id}/${statusInt ? statusInt : 0}`, config).then(response => {
      setValores(response.data)
    })

  }



  const [valores, setValores ] = useState<Card[]>([]);
  useEffect(() => {
    setStatus(statusVar)
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`projetos/listar/${secao.secao.id}/${statusVar ? status : 0}`, config).then(response => {
        setValores(response.data)
        console.log("Nesse")
      })
    }
    carregaDados();
  },[])
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
          {status == 0 ? "Todos" : status == 4 ? "Andamentos" : status == 3 ? "Concluidos" :
            status == 2 ? "Atrasados" : status == 1 ? "Não Iniciado" : "Todos" }
          </div>
          <ul>
            <li>
              <a className="de" onClick={() => addStatus(0)}>Todos</a>
            </li>
            <li>
              <a className="br" onClick={() => addStatus(4)}>Andamentos</a>
            </li>
            <li>
              <a className="en" onClick={() => addStatus(2)}>Atrasados</a>
            </li>
            <li>
              <a className="fr" onClick={() => addStatus(3)}>Concluídos</a>
            </li>
            <li>
              <a className="fr" onClick={() => addStatus(1)}>Não Iniciado</a>
            </li>
          </ul>
        </div>
      </ContFilter>
    </Container>
        <FilterSearch/>
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
            : "Não existe nenhum projeto cadastrado"
          }


        </Content_cards>
        <Menu/>
      </All>
    </>
  );
};

export default Home;
;
