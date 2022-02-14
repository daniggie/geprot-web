import React, { useState, useEffect, useLayoutEffect } from "react";
import { TituloF, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont, ContFilter, ContLang, Content_not } from './styles';
import Menu from '../../components/Menu';
import { useParams } from "react-router";

import Header from "../../components/Header";
import FilterStatus from "../../components/Filters/FilterStatus";
import FilterCC from "../../components/Filters/FilterCC";
import ChartSevenDyas from "../../components/ChartsColumns/ChartSevenDays";

import {api, cotacao} from "../../services/api";
import { Chart } from "react-google-charts";
import ChartMonth from "../../components/ChartsColumns/ChartMonth";
import ChartSixMonth from "../../components/ChartsColumns/ChartSixMonth";
import ChartYear from "../../components/ChartsColumns/ChartYear";
import { FiChevronRight } from "react-icons/fi";
import Notifications from "../../components/Notifications";

interface DashboardProjetos {
  projetosNaoIniciados: number;
  projetosAtrasados: number;
  projetosEmAndamento: number;
  projetosConcluidos: number;
  restoProjetosNaoIniciados: number;
  restoProjetosAtrasados: number;
  restoProjetosEmAndamento: number;
  restoProjetosConcluidos:number;
}

interface DashboardVerbas {
  verbaTotal: number;
  verbaUtilizada:number;
}

interface DashboardConcluidos {
  data: string;
  quantidade: number;
}

interface Cotacao {
  USDBRL: {
    ask: number;
  },
  EURBRL: {
    ask:number;
  }
}

const Dashboard: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valoresProjetos, setValoresProjetos ] = useState<DashboardProjetos>();
  const [valoresVerbas, setValoresVerbas ] = useState<DashboardVerbas>();
  const [valoresConcluidos, setValoresConcluidos] = useState<DashboardConcluidos[]>([]);
  const [valorCotado, setValorCotado] = useState<Cotacao>();
  const token = localStorage.getItem("@Geprot:token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [ filtroTempo, setFiltroTempo ] = useState<number>();

  async function buscarValores() {
    var response = await api.get(`dashboard/projetos/${id}`, config).then(response => {
      setValoresProjetos(response.data)
    })
    
    var resposta = await api.get(`dashboard/verbas/${id}`,config).then(resposta => {
      setValoresVerbas(resposta.data)
    })    
  }

  useEffect(() => {
    buscarValores();
    buscarCotacao();
  }, [])

  async function buscarCotacao() {
    cotacao(`USD-BRL,EUR-BRL`).then(response => {
      setValorCotado(response.data)
    })    
  }

  
  const dolar = 5.34;
  const euro = 6.24 ;

  const filtros = (filtro :number) => {
    setFiltroTempo(filtro);
    setFiltroTempo(filtro);
  }

  return(
    <>
      <Header/>

      <TituloF>
        <p className="helvetica bold fonte_15 cor_5">Filtros</p>
        <hr />
      </TituloF>

      <Filtros>
        
        <FilterStatus/>

        <ContFilter>
          <div className="arrow">
            <FiChevronRight size="15px" color="#00579D"/>
          </div>

          <div className="texto cor_5">
            Tempo:
          </div>

          <ContLang>
            <div className="lang-menu">
              <div className="selected-lang">
              {filtroTempo == 1 ? "Último mês" : filtroTempo == 2 ? "Últimos 6 meses" : filtroTempo == 3 ? "Último ano" : "Últimos 7 dias"}
              </div>
              <ul>
                <li>
                  <a onClick={() => filtros(0)} className="de">Últimos 7 dias</a>
                </li>
                <li>
                  <a onClick={() => filtros(1)} className="br">Último mês</a>
                </li>
                <li>
                  <a onClick={() => filtros(2)} className="en">Últimos 6 meses</a>
                </li>
                <li>
                  <a onClick={() => filtros(3)} className="fr">Último ano</a>
                </li>
              </ul>
            </div>
          </ContLang>
        </ContFilter>

        <FilterCC/>

      </Filtros>

      <All>
      <Content_not>
        <Notifications/>
      </Content_not>

        <BodyDashboards>

          <Container>

            <MediumCont>
              <div className="status cor_6f fonte_15 bold">
                  <p>VERBA  APROVADA</p>
                </div>
                <table className="funds">
                  <tr>
                    <td className="impar bold fonte_15">{valoresVerbas?.verbaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                  </tr>
                  <tr>
                    <td className="par bold fonte_15">€{((valoresVerbas?.verbaTotal ? valoresVerbas?.verbaTotal : 0) / valorCotado!?.EURBRL.ask).toLocaleString('de-DE')}</td>
                  </tr>
                  <tr>
                    <td className="impar bold fonte_15">{((valoresVerbas?.verbaTotal ? valoresVerbas?.verbaTotal : 0) / valorCotado!?.USDBRL.ask).toLocaleString('en-IN',{style: 'currency',currency: 'USD'})}</td>
                  </tr>
              </table>
            </MediumCont>

            <BigCont>
              <div className="title status cor_6f fonte_15 bold">
                <p>PROJETOS CONCLUÍDOS</p>
              </div>
              {filtroTempo == 1 ? <ChartMonth/> : filtroTempo == 2 ? <ChartSixMonth/> : filtroTempo == 3 ? <ChartYear/> : <ChartSevenDyas/>}
            </BigCont>

          </Container>

          <Container>

            <MediumCont>
              <div className="status cor_6f fonte_15 bold">
                  <p>VERBA DISPONÍVEL</p>
                </div>
                <table className="funds">
                  <tr>
                    <td className="impar bold fonte_15">{valoresVerbas?.verbaUtilizada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                  </tr>
                  <tr>
                    <td className="par bold fonte_15">€{((valoresVerbas?.verbaUtilizada ? valoresVerbas?.verbaUtilizada : 0) / euro).toLocaleString('de-DE')}</td>
                  </tr>
                  <tr>
                    <td className="impar bold fonte_15">{((valoresVerbas?.verbaUtilizada ? valoresVerbas?.verbaUtilizada : 0) / dolar).toLocaleString('en-IN',{style: 'currency',currency: 'USD'})}</td>
                  </tr>
              </table>
            </MediumCont>

            <LitlleCont>
              <div className="title status cor_6f fonte_15 bold">
                <p>PROJETOS EM ANDAMENTO</p>
              </div>

              <div className="linelabel">

              <Chart
                width={"100%"}
                height={"180px"}
                chartType="PieChart"
                loader={<p>Loading Chart</p>}

                data={[
                  ['Projects', 'Percent'],
                  ['Late', valoresProjetos?.projetosEmAndamento],
                  ['Rest', valoresProjetos?.restoProjetosEmAndamento]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#00579D', '#e9e9e9', '#eaeaea' ],
                  legend: {
                    position: "none"
                  },
                  pieSliceText: "none",
                  tooltip: {
                    trigger: "none"
                  },
                  chartArea:{
                    left:0,
                    top:10,
                    width:'100%',
                    height:'90%'
                  }
                }}
              />
              <div id="labelOverlay">
                <p className="used-size">{valoresProjetos?.projetosEmAndamento.toFixed(1)}<span>%</span></p>
                <p className="total-size"> of 100%</p>
              </div>
            </div>
            </LitlleCont>

            <LitlleCont>
              <div className="title status cor_6f fonte_15 bold">
                <p>PROJETOS NÃO INICIADOS</p>
              </div>

              <div className="linelabel">


              <Chart
                width={"100%"}
                height={"180px"}
                chartType="PieChart"
                loader={<p>Loading Chart</p>}

                data={[
                  ['Projects', 'Percent'],
                  ['Late', valoresProjetos?.projetosNaoIniciados],
                  ['Rest', valoresProjetos?.restoProjetosNaoIniciados]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#00579D', '#e9e9e9', '#eaeaea' ],
                  legend: {
                    position: "none"
                  },
                  tooltip: {
                    trigger: "none"
                  },
                  pieSliceText: "none",
                  chartArea:{
                    left:0,
                    top:10,
                    width:'100%',
                    height:'90%'
                  }
                }}
              />
              <div id="labelOverlay">
                <p className="used-size">{valoresProjetos?.projetosNaoIniciados.toFixed(1)}<span>%</span></p>
                <p className="total-size"> of 100%</p>
              </div>
            </div>
            </LitlleCont>

            <LitlleCont>
              <div className="title status cor_6f fonte_15 bold">
                <p>PROJETOS ATRASADOS</p>
              </div>
              <div className="linelabel">


              <Chart
                width={"100%"}
                height={"180px"}
                chartType="PieChart"
                loader={<p>Loading Chart</p>}

                data={[
                  ['Projects', 'Percent'],
                  ['Late', valoresProjetos?.projetosAtrasados],
                  ['Rest', valoresProjetos?.restoProjetosAtrasados]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#00579D', '#e9e9e9', '#eaeaea' ],
                  legend: {
                    position: "none"
                  },
                  tooltip: {
                    trigger: "none"
                  },
                  pieSliceText: "none",
                  chartArea:{
                    left:0,
                    top:10,
                    width:'100%',
                    height:'90%'
                  }
                }}
              />
              <div id="labelOverlay">
                <p className="used-size">{valoresProjetos?.projetosAtrasados.toFixed(1)}<span>%</span></p>
                <p className="total-size"> of 100%</p>
              </div>
            </div>
            </LitlleCont>

          </Container>

        </BodyDashboards>

        <Menu>
        </Menu>

      </All>
    </>
  );
};

export default Dashboard;
