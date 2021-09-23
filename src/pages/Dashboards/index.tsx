import React, { useState, useEffect, useLayoutEffect } from "react";
import { TituloF, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont } from './styles';
import Menu from '../../components/Menu';
import { useParams } from "react-router";

import Header from "../../components/Header";
import FilterSearch from "../../components/Filters/FilterSearch";
import FilterStatus from "../../components/Filters/FilterStatus";
import FilterTime from "../../components/Filters/FilterTime";
import FilterCC from "../../components/Filters/FilterCC";
import ChartSevenDyas from "../../components/ChartsColumns/ChartSevenDays";

import api from "../../services/api";
import { Chart } from "react-google-charts";
import ChartMonth from "../../components/ChartsColumns/ChartMonth";
import ChartSixMonth from "../../components/ChartsColumns/ChartSixMonth";
import ChartYear from "../../components/ChartsColumns/ChartYear";

interface Dashboard {
  projetosConcluidos: number;
  projetosAtrasados: number;
  projetosEmAndamento: number;
  projetosNaoIniciados: number;
  verbasDisponivel: number;
  verbasAprovadas:number;
  restoProjetosAtrasados: number;
  restoProjetosEmAndamento: number;
  restoProjetosNaoIniciados: number;
}

interface DashboardConcluidos {
  data: string;
  quantidade: number;
}


const Dashboard: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valores, setValores ] = useState<Dashboard>();
  const [valoresConcluidos, setValoresConcluidos] = useState<DashboardConcluidos[]>([])
  const token = localStorage.getItem("@Geprot:token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
  });

  async function buscarValores1() {
    var response = await api.get(`dashboard/concluidos/7dias/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
      setValoresConcluidos(response.data)
    })
  }

  async function buscarValores2() {
    var response = await api.get(`secao/listar/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
      setValores(response.data)
    })
  }

  useEffect(() => {
    buscarValores1()
    buscarValores2()
  }, [])

  const dolar = 5.29;
  const euro = 6.20;


  return(
    <>
      <Header/>

      <TituloF>
        <p className="helvetica bold fonte_15 cor_3">Filtros</p>
        <hr />
      </TituloF>

      <Filtros>

        <FilterSearch/>

        <FilterStatus/>

        <FilterTime/>

        <FilterCC/>

      </Filtros>

      <All>

        <BodyDashboards>

          <Container>

            <MediumCont>
              <div className="status cor_3f fonte_13 bold">
                  <p>VERBA  APROVADA</p>
                </div>
                <table className="funds">
                  <tr>
                    <td className="impar fonte_15">R$ {valores?.verbasAprovadas}</td>
                  </tr>
                  <tr>
                    <td className="par fonte_15">€ {((valores?.verbasAprovadas ? valores?.verbasAprovadas : 0) / euro).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="impar fonte_15">$ {((valores?.verbasAprovadas ? valores?.verbasAprovadas : 0) / dolar).toFixed(2)}</td>
                  </tr>
              </table>
            </MediumCont>

            <BigCont>
              <div className="title status cor_3f fonte_13 bold">
                <p>PROJETOS CONCLUÍDOS</p>
              </div>
              <ChartYear />
            </BigCont>

          </Container>

          <Container>

            <MediumCont>
              <div className="status cor_3f fonte_13 bold">
                  <p>VERBA DISPONÍVEL</p>
                </div>
                <table className="funds">
                  <tr>
                    <td className="impar fonte_15">R$ {valores?.verbasDisponivel}</td>
                  </tr>
                  <tr>
                    <td className="par fonte_15">€ {((valores?.verbasDisponivel ? valores?.verbasDisponivel : 0) / euro).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="impar fonte_15">$ {((valores?.verbasDisponivel ? valores?.verbasDisponivel : 0) / dolar).toFixed(2)}</td>
                  </tr>
              </table>
            </MediumCont>

            <LitlleCont>
              <div className="title status cor_3f fonte_13 bold">
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
                  ['Late', valores?.projetosEmAndamento],
                  ['Rest', valores?.restoProjetosEmAndamento]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#3aa5dd', '#e9e9e9', '#eaeaea' ],
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
                <p className="used-size">{valores?.projetosEmAndamento.toFixed(1)}<span>%</span></p>
                <p className="total-size"> of 100%</p>
              </div>
            </div>
            </LitlleCont>

            <LitlleCont>
              <div className="title status cor_3f fonte_13 bold">
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
                  ['Late', valores?.projetosNaoIniciados],
                  ['Rest', valores?.restoProjetosNaoIniciados]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#3aa5dd', '#e9e9e9', '#eaeaea' ],
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
                <p className="used-size">{valores?.projetosNaoIniciados.toFixed(1)}<span>%</span></p>
                <p className="total-size"> of 100%</p>
              </div>
            </div>
            </LitlleCont>

            <LitlleCont>
              <div className="title status cor_3f fonte_13 bold">
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
                  ['Late', valores?.projetosAtrasados],
                  ['Rest', valores?.restoProjetosAtrasados]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#3aa5dd', '#e9e9e9', '#eaeaea' ],
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
                <p className="used-size">{valores?.projetosAtrasados.toFixed(1)}<span>%</span></p>
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
