import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import api from "../../../services/api";
import { Chart } from "react-google-charts";

  interface DashboardConcluidos {
    quantidadeConcluidos: number;
    mes: string;
  }

const ChartYear: React.FC = () => {
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
      await api.get(`projetos/dashboard/ultimoano/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
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
              [valoresConcluidos[11] ? valoresConcluidos[11].mes : undefined, valoresConcluidos[11] ? valoresConcluidos[11].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[10] ? valoresConcluidos[10].mes : undefined, valoresConcluidos[10] ? valoresConcluidos[10].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[9] ? valoresConcluidos[9].mes : undefined, valoresConcluidos[9] ? valoresConcluidos[9].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[8] ? valoresConcluidos[8].mes : undefined, valoresConcluidos[8] ? valoresConcluidos[8].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[7] ? valoresConcluidos[7].mes : undefined, valoresConcluidos[7] ? valoresConcluidos[7].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[6] ? valoresConcluidos[6].mes : undefined, valoresConcluidos[6] ? valoresConcluidos[6].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[5] ? valoresConcluidos[5].mes : undefined, valoresConcluidos[5] ? valoresConcluidos[5].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[4] ? valoresConcluidos[4].mes : undefined, valoresConcluidos[4] ? valoresConcluidos[4].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[3] ? valoresConcluidos[3].mes : undefined, valoresConcluidos[3] ? valoresConcluidos[3].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[2] ? valoresConcluidos[2].mes : undefined, valoresConcluidos[2] ? valoresConcluidos[2].quantidadeConcluidos : undefined, "#0091BD"],
              [valoresConcluidos[1] ? valoresConcluidos[1].mes : undefined, valoresConcluidos[1] ? valoresConcluidos[1].quantidadeConcluidos : undefined, '#2382BA'],
              [valoresConcluidos[0] ? valoresConcluidos[0].mes : undefined, valoresConcluidos[0] ? valoresConcluidos[0].quantidadeConcluidos : undefined, "#0091BD"],
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

export default ChartYear;
