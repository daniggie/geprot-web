import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import api from "../../../services/api";
import { Chart } from "react-google-charts";



  interface DashboardConcluidos {
    mesAno: string;
    quantidade: number;
  }

const ChartMonth: React.FC = () => {
    const [valoresConcluidos, setValoresConcluidos] = useState<DashboardConcluidos[]>([])
    const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const [secao] = useState(() => {
      let usuario = localStorage.getItem('@Geprot:gestor');

      if(usuario) {
          let languageObject = JSON.parse(usuario);
          return languageObject;
      }
    });

    async function buscarValores1() {
      var response = await api.get(`dashboard/concluidos/ultimoMes/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
        setValoresConcluidos(response.data)
      })
    }

    useEffect(() => {
      buscarValores1()
    }, [])

    return(
        <Chart
            width={"100%"}
            height={"180px"}
            chartType="ColumnChart"
            loader={<p>Loading Chart</p>}

            data={[
              ['Weeks', 'Projetos concluidos', { role: 'style' }],
              [valoresConcluidos[3] ? valoresConcluidos[3].mesAno : undefined, valoresConcluidos[3] ? valoresConcluidos[3].quantidade : undefined, "#0091BD"],
              [valoresConcluidos[2] ? valoresConcluidos[2].mesAno : undefined, valoresConcluidos[2] ? valoresConcluidos[2].quantidade : undefined,'#2382BA'],
              [valoresConcluidos[1] ? valoresConcluidos[1].mesAno : undefined, valoresConcluidos[1] ? valoresConcluidos[1].quantidade : undefined,"#0091BD"],
              [valoresConcluidos[0] ? valoresConcluidos[0].mesAno : undefined, valoresConcluidos[0] ? valoresConcluidos[0].quantidade : undefined,'#2382BA'],
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

export default ChartMonth;
