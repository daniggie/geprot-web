import React, {useEffect, useState} from "react";
import { All, Content, BttnPosition } from "./style";
import ButtonAprovar from "../../components/Buttons/ButtonAprovar";
import Barra from "../../components/Barra";
import { Chart } from "react-google-charts";

import api from "../../services/api";
import { useParams } from "react-router";
import ContDetails from "../../components/TableDetails";

interface Card {
  id: number;
  nome: string;
  dataInicio: string;
  dataFinalizacao: string;
  valor: number;
  valorRestantes: number;
  horasPrevistas: number;
  valorUtilizado: number;
  horasTrabalhadas: number;
  descricao: string;
  secaos : {
    id: number;
    nome: string;
    valor: number;
  }
}

const Detalhes: React.FC = () => {
  const { id }: {id:string} = useParams();
  const [valores, setValores ] = useState<Card>();

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      await api.get(`projetos/listar/projetos/${id ? id : null}`).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ id ])

  return(
    <>
        <Barra />

      <All>
        <Content>
          <div className="line cor_0">
            <p> Seção {valores?.secaos.id} </p>
          </div>

          <div className="line ">
            <p className="fonte_25 cor_3">{valores?.id ? valores.id : "id"} - {valores?.nome ? valores.nome : "nome"}</p>
            <p className=" cor_1">ATA Nº 07/2020</p>
          </div>

          <div className="line ">
            <p className="cor_1">Data inicial: </p>
            <p className="cor_0">{valores?.dataInicio ? valores.dataInicio : "00/00/0000"}</p>
            <div className="download cor_000 cor_3f">
              ATA_CVDP_07_2020
            </div>
          </div>

          <div className="line ">
            <p className="cor_1">Data final: </p>
            <p className="cor_0">{valores?.dataFinalizacao ? valores.dataFinalizacao : "00/00/0000"}</p>
            <div className="download cor_000 cor_3f">
              DASHBOARD
            </div>
          </div>

          <div className="line cor_1">
            <p> Objetivo: </p>
          </div>

          <div className="line cor_0">
            <p> {valores?.descricao ? valores?.descricao : "Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV), envio da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do cliente para automatizar o envio de pedidos e atualização do próprio sistema através do EDI (Eletronic Data Interchange). O Cliente já implementou este sistema nos principais fornecedores."}</p>
          </div>

          <div className="line">
            <p className="cor_1"> Valor do projeto: </p>
            <p className="cor_0"> R$ {valores?.valor ? valores.valor : "0"}</p>
          </div>

          <div className="line">
            <p className="cor_1"> Saldo </p>
            <p className="cor_0"> R$ {valores?.valorRestantes ? valores.valorRestantes : "0"}</p>
          </div>

          <div className="line">
            <p className="cor_1"> Valor consumido: </p>
            <p className="cor_0"> R$ {valores?.valorUtilizado ? valores.valorUtilizado : "0"}</p>
          </div>

        </Content>

        <Content>
          <div className="line ">
            <p className="cor_1">Horas previstas: </p>
            <p className="cor_0">{valores?.horasPrevistas ? valores.horasPrevistas : "0"} Horas</p>
          </div>

          <div className="line">
            <p className="cor_1">Horas trabalhadas: </p>
            <p className="cor_0">{valores?.horasTrabalhadas ? valores.horasTrabalhadas : "0"} Horas</p>
          </div>

          <div className="linelabel">
            <Chart
              width={"100%"}
              height={"150px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}

              data={[
                ['Times', 'Percent'],
                ['Horas', valores?.horasTrabalhadas],
                ['Horas', valores?.horasPrevistas]
              ]}

              options={{
                pieHole: 0.70,
                title: "",
                pieSliceBorderColor: "none",
                colors: ['#3aa5dd', '#EEE9E9', '#eaeaea' ],
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
              <p className="used-size">{valores?.horasTrabalhadas }<span>h</span></p>
              <p className="total-size"> of {valores?.horasPrevistas}h</p>
            </div>
          </div>

          <div className="table_header">
            <div className="table cor_1">
              Despesas(Desembolso)
            </div>
            <div className="table cor_1">
              Valor (R$)
            </div>
            <div className="table cor_1">
              CC Pagante
            </div>
          </div>

          <div className="contDetails">
            <ContDetails/>
          </div>

        </Content>

        <BttnPosition>
          <a href="/aprovarhoras">
            <ButtonAprovar />
          </a>
        </BttnPosition>
      </All>
    </>
  )
}

export default Detalhes;
