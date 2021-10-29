import React, {useState, useEffect} from "react";
import api from "../../../services/api";
import { Chart } from "react-google-charts";

interface DashboardConcluidos {
  periodo: string;
  quantidadeConcluidos: number;
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
    await api.get(`projetos/dashboard/mes/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
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
        [valoresConcluidos[3] ? valoresConcluidos[3].periodo : undefined, valoresConcluidos[3] ? valoresConcluidos[3].quantidadeConcluidos : undefined, "#0091BD"],
        [valoresConcluidos[2] ? valoresConcluidos[2].periodo : undefined, valoresConcluidos[2] ? valoresConcluidos[2].quantidadeConcluidos : undefined,'#2382BA'],
        [valoresConcluidos[1] ? valoresConcluidos[1].periodo : undefined, valoresConcluidos[1] ? valoresConcluidos[1].quantidadeConcluidos : undefined,"#0091BD"],
        [valoresConcluidos[0] ? valoresConcluidos[0].periodo : undefined, valoresConcluidos[0] ? valoresConcluidos[0].quantidadeConcluidos : undefined,'#2382BA'],
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
