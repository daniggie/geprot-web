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
      await api.get(`projetos/listar/${id ? id : null}`).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ id ])

  return(
    <>
      <a href="/home">
        <Barra>
        </Barra>
      </a>

      <All>
        <Content>
          <div className="line cor_0">
            <p> Seção X </p>
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
            <p className="cor_0"> R$ {valores?.valor ? valores.valor : "15.000,00"}</p>
          </div>

          <div className="line">
            <p className="cor_1"> Saldo </p>
            <p className="cor_0"> R$ {valores?.valorRestantes ? valores.valorRestantes : "10.000,00"}</p>
          </div>

          <div className="line">
            <p className="cor_1"> Valor consumido: </p>
            <p className="cor_0"> R$ {valores?.valorUtilizado ? valores.valorUtilizado : "5.000,00"}</p>
          </div>

        </Content>

        <Content>
          <div className="line ">
            <p className="cor_1">Horas previstas: </p>
            <p className="cor_0">{valores?.horasPrevistas ? valores.horasPrevistas : "250"} Horas</p>
          </div>

          <div className="line">
            <p className="cor_1">Horas trabalhadas: </p>
            <p className="cor_0">{valores?.horasTrabalhadas ? valores.horasTrabalhadas : "120"} Horas</p>
          </div>

          <div className="line">
            <Chart
              width={"100%"}
              height={"180px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}

              data={[
                ['Times', 'Percent'],
                ['Horas', valores?.horasPrevistas],
                ['Horas', valores?.horasTrabalhadas]
              ]}

              options={{
                pieHole: 0.67,
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
              <p className="used-size">120<span>h</span></p>
              <p className="total-size"> of 120h</p>
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
            <ContDetails/>
            <ContDetails/>
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
