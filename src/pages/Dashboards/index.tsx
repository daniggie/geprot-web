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
        <p>Filtros</p>
        <div></div>
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
              <div className="title status cor_3f">
                <p>PROJETOS CONCLUÍDOS</p>
              </div>
              <Chart
                width={"100%"}
                height={"180px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}

                data={[
                  ['Projects', 'Percent', { role: 'style' }],
                  ['Completed', 30, "#0091BD"],
                  ['Not Completed', 70, "#00579D"],
                ]}

                options={{
                  pieHole: 0.5,
                  pieSliceTextStyle: {
                  color: 'black',
                  },
                  legend: 'none'
                }}
              />
            </MediumCont>

            <BigCont>
              <div className="title status cor_3f">
                <p>PROJETOS EM ANDAMENTO</p>
              </div>
              <Chart
                width={"100%"}
                height={"180px"}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}

                data={[
                  ['Weeks', 'Projects', { role: 'style' }],
                  ['Day 1', 10, "#0091BD"],
                  ['Day 2', 20, "#0091BD"],
                  ['Day 3', 50, "#0091BD"],
                  ['Day 4', 17, "#0091BD"],
                  ['Day 5',20, "#0091BD"],
                  ['Day 6', 20, "#0091BD"],
                  ['Day 7', 60, "#0091BD"],
                ]}

                options={{
                  legend: 'none',
                  columnSliceTextStyle: {
                    color: '#828282',
                    },
                }}
              />
            </BigCont>

          </Container>

          <Container>

            <MediumCont>
              <div className="title status cor_3f">
                <p>PROJETOS ATRASADOS</p>
              </div>
            </MediumCont>

            <LitlleCont>
              <div className="status cor_3f">
                <p>VERBA DISPONÍVEL</p>
              </div>
              <table className="funds">
                <tr>
                  <td className="impar">R$ 14.000,00</td>
                </tr>
                <tr>
                  <td className="par">€ 2.205,34</td>
                </tr>
                <tr>
                  <td className="impar">$ 2.677,68</td>
                </tr>
             </table>
            </LitlleCont>

            <LitlleCont>
              <div className="status cor_3f">
                <p>VERBA NÃO LIBERADA</p>
              </div>
              <table className="funds">
                <tr>
                  <td className="impar">R$ 14.000,00</td>
                </tr>
                <tr>
                  <td className="par">€ 2.205,34</td>
                </tr>
                <tr>
                  <td className="impar">$ 2.677,68</td>
                </tr>
             </table>
            </LitlleCont>

            <LitlleCont>
              <div className="status cor_3f">
                <p>VERBA  APROVADA</p>
              </div>
              <table className="funds">
                <tr>
                  <td className="impar">R$ 14.000,00</td>
                </tr>
                <tr>
                  <td className="par">€ 2.205,34</td>
                </tr>
                <tr>
                  <td className="impar">$ 2.677,68</td>
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
