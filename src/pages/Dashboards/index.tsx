import React, { useState, useEffect } from "react";
import { TituloF, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont } from './styles';
import Menu from '../../components/Menu';
import { useParams } from "react-router";

import Header from "../../components/Header";
import FilterSearch from "../../components/Filters/FilterSearch";
import FilterStatus from "../../components/Filters/FilterStatus";
import FilterTime from "../../components/Filters/FilterTime";
import FilterCC from "../../components/Filters/FilterCC";

import api from "../../services/api";
import { Chart } from "react-google-charts";
import { number } from "yargs";

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


const Dashboard: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valores, setValores ] = useState<Dashboard>();

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});
  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      await api.get(`secao/listar/${secao.secao.id ? secao.secao.id : null}`).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ secao.secao.id ])

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
                    <td className="par fonte_15">€ 2.205,34</td>
                  </tr>
                  <tr>
                    <td className="impar fonte_15">$ 2.677,68</td>
                  </tr>
              </table>
            </MediumCont>

            <BigCont>
              <div className="title status cor_3f fonte_13 bold">
                <p>PROJETOS CONCLUÍDOS</p>
              </div>
              <Chart
                width={"100%"}
                height={"180px"}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}

                data={[
                  ['Weeks', 'Projects', { role: 'style' }],
                  ['Day 1', 11, "#0091BD"],
                  ['Day 2', 25, '#2382BA'],
                  ['Day 3', 56, "#0091BD"],
                  ['Day 4', 17, '#2382BA'],
                  ['Day 5', 32, "#0091BD"],
                  ['Day 6', 28, '#2382BA'],
                  ['Day 7', 77, "#0091BD"],
                ]}

                options={{
                  legend: 'none',
                  columnSliceTextStyle: {
                    color: '#828282',
                  },
                  chartArea:{
                    left:40,
                    top:10,
                    width:'92%',
                    height:'80%'
                  }
                }}
              />
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
                    <td className="par fonte_15">€ 2.205,34</td>
                  </tr>
                  <tr>
                    <td className="impar fonte_15">$ 2.677,68</td>
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
                loader={<div>Loading Chart</div>}

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
                <p className="used-size">{valores?.projetosEmAndamento}<span>%</span></p>
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
                loader={<div>Loading Chart</div>}

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
                <p className="used-size">{valores?.projetosNaoIniciados}<span>%</span></p>
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
                loader={<div>Loading Chart</div>}

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
                <p className="used-size">{valores?.projetosAtrasados}<span>%</span></p>
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
