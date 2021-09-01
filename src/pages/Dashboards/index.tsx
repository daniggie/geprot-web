import React, { useState } from "react";
import { TituloF, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont } from './styles';
import Menu from '../../components/Menu';

import Header from "../../components/Header";
import FilterSearch from "../../components/FilterSearch";
import FilterStatus from "../../components/FilterStatus";
import FilterTime from "../../components/FilterTime";
import FilterCC from "../../components/FilterCC";

import { Chart } from "react-google-charts";


const Dashboard: React.FC = () => {

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
              <div className="title status cor_3f fonte_13 bold">
                <p>PROJETOS CONCLUÍDOS</p>
              </div>
              <Chart
                width={"100%"}
                height={"180px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}

                data={[
                  ['Projects', 'Percent'],
                  ['Late', .80],
                  ['Rest', .55]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#067ab5', '#3aa5dd', '#eaeaea' ],
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
                <p className="used-size">59,3<span>%</span></p>
                <p className="total-size"> of 100%</p>
              </div>
            </MediumCont>

            <BigCont>
              <div className="title status cor_3f fonte_13 bold">
                <p>PROJETOS EM ANDAMENTO</p>
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
              <div className="title status cor_3f fonte_13 bold">
                <p>PROJETOS ATRASADOS</p>
              </div>
              <Chart
                width={"100%"}
                height={"180px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}

                data={[
                  ['Projects', 'Percent'],
                  ['Late', .30],
                  ['Rest', .55]
                ]}

                options={{
                  pieHole: 0.55,
                  title: "",
                  pieSliceBorderColor: "none",
                  colors: ['#067ab5', '#3aa5dd', '#eaeaea' ],
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
              <div id="labelOverlay2">
                <p className="used-size2">35,3<span>%</span></p>
                <p className="total-size2"> of 100%</p>
              </div>
            </MediumCont>

            <LitlleCont>
              <div className="status cor_3f fonte_13 bold">
                <p>VERBA DISPONÍVEL</p>
              </div>
              <table className="funds">
                <tr>
                  <td className="impar fonte_15">R$ 14.000,00</td>
                </tr>
                <tr>
                  <td className="par fonte_15">€ 2.205,34</td>
                </tr>
                <tr>
                  <td className="impar fonte_15">$ 2.677,68</td>
                </tr>
             </table>
            </LitlleCont>

            <LitlleCont>
              <div className="status cor_3f fonte_13 bold">
                <p>VERBA NÃO LIBERADA</p>
              </div>
              <table className="funds">
                <tr>
                  <td className="impar fonte_15">R$ 14.000,00</td>
                </tr>
                <tr>
                  <td className="par fonte_15">€ 2.205,34</td>
                </tr>
                <tr>
                  <td className="impar fonte_15">$ 2.677,68</td>
                </tr>
             </table>
            </LitlleCont>

            <LitlleCont>
              <div className="status cor_3f fonte_13 bold">
                <p>VERBA  APROVADA</p>
              </div>
              <table className="funds">
                <tr>
                  <td className="impar fonte_15">R$ 14.000,00</td>
                </tr>
                <tr>
                  <td className="par fonte_15">€ 2.205,34</td>
                </tr>
                <tr>
                  <td className="impar fonte_15">$ 2.677,68</td>
                </tr>
             </table>
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
