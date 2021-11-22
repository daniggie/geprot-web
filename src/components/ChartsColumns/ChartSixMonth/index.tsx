import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import {api} from "../../../services/api";
import { Chart } from "react-google-charts";

  interface DashboardConcluidos {
    quantidadeConcluidos: number;
    mes: string;
  }

const ChartSixMonth: React.FC = () => {
    const { id }: {id:string} = useParams();
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
      await api.get(`/projetos/dashboard/6meses/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
        setValoresConcluidos(response.data)
      })
    }


    useEffect(() => {
      buscarValores1()
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
              ['Months', 'Projetos concluidos', { role: 'style' }],
              [valoresConcluidos[5] ? valoresConcluidos[5].mes : undefined, valoresConcluidos[5] ? valoresConcluidos[5].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[4] ? valoresConcluidos[4].mes : undefined, valoresConcluidos[4] ? valoresConcluidos[4].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[3] ? valoresConcluidos[3].mes : undefined, valoresConcluidos[3] ? valoresConcluidos[3].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[2] ? valoresConcluidos[2].mes : undefined, valoresConcluidos[2] ? valoresConcluidos[2].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[1] ? 'MÊS PASSADO' : undefined, valoresConcluidos[1] ? valoresConcluidos[1].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[0] ? 'ESSE MÊS' : undefined, valoresConcluidos[0] ? valoresConcluidos[0].quantidadeConcluidos : undefined, '#2382BA'],
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
