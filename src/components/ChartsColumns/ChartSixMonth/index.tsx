import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import api from "../../../services/api";
import { Chart } from "react-google-charts";

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

const ChartSixMonth: React.FC = () => {
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
        <Chart
            width={"100%"}
            height={"180px"}
            chartType="ColumnChart"
            loader={<p>Loading Chart</p>}

            data={[
              ['Months', 'Projects', { role: 'style' }],
              ['Month 1', 11, "#0091BD"],
              ['Month 2', 25, '#2382BA'],
              ['Month 3', 56, "#0091BD"],
              ['Month 4', 17, '#2382BA'],
              ['Month 5', 32, "#0091BD"],
              ['Month 6', 28, '#2382BA'],
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
    );
};

export default ChartSixMonth;
