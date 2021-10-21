import React, {useEffect, useState} from "react";
import { All, Content, BttnPosition } from "./style";
import ButtonAprovar from "../../components/Buttons/ButtonAprove";
import Barra from "../../components/Barra";
import { Chart } from "react-google-charts";

import api from "../../services/api";
import { useParams } from "react-router";
import ContDetails from "../../components/TableDetails";
import { FiEdit } from "react-icons/fi";
import Header from "../../components/Header";

interface Card {
  id: number;
  nome: string;
  dataInicio: string;
  dataFinalizacao: string;
  valor: number;
  nomeSolicitante: string,
  nomeResponsavel: string,
  horasPrevistas: number;
  valorUtilizado: number;
  valorRestante: number;
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
  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');
    if (usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
      }
  });

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`projetos/buscar/${id ? id : null}`, config).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ id ])

  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
});
let horasRestantes = (valores?.horasPrevistas ? valores?.horasPrevistas : 0) - (valores?.horasTrabalhadas ? valores?.horasTrabalhadas : 0);
const LinkAprovar = "/aprovarhoras/";

  return(
    <>
      <Header/>

      <All>
        <Content>
          <div className="line cor_0 fonte_15">
            <p> Seção - {secao.secao.nome} </p>
            <a href="/editar1">
              <p><FiEdit size={20} color="#828282"/></p>
            </a>
          </div>

          <div className="line ">
            <p className="cor_0 fonte_15">Responsável: {valores?.nomeResponsavel}</p>
            <p className="cor_0 fonte_15">Solicitante: {valores?.nomeSolicitante}</p>
          </div>

          <div className="line ">
            <p className="fonte_25 cor_5">{valores?.id ? valores.id : "id"} - {valores?.nome ? valores.nome : "nome"}</p>
            <p className=" cor_5">ATA Nº 07/2020</p>
          </div>

          <div className="line ">
            <b className="cor_5">Data inicial: </b>
            <b className="cor_0">{valores?.dataInicio ? valores.dataInicio : "0000-00-00"}</b>
            <div className="download cor_000 cor_6f">
              ATA_CVDP_07_2020
            </div>
          </div>

          <div className="line ">
            <b className="cor_5">Data final: </b>
            <b className="cor_0">{valores?.dataFinalizacao ? valores.dataFinalizacao : "0000-00-00"}</b>
            <div className="download cor_000 cor_6f">
              DASHBOARD
            </div>
          </div>



          <div className="line cor_5">
            <p> Objetivo: </p>
          </div>

          <div className="lineobj cor_0">
            <p> {valores?.descricao ? valores?.descricao : "Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV), envio da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do cliente para automatizar o envio de pedidos e atualização do próprio sistema através do EDI (Eletronic Data Interchange). O Cliente já implementou este sistema nos principais fornecedores."}</p>
          </div>

          <div className="line">
            <b className="cor_5 p1"> Valor do projeto: </b>
            <b className="cor_5 p3">R$</b>
            <b className="cor_0 p2">{valores?.valor ? valores.valor : "0,00"}</b>
          </div>

          <div className="line">
            <b className="cor_5 p1"> Valor consumido: </b>
            <b className="cor_5 p3">R$</b>
            <b className="cor_0 p2"> {valores?.valorUtilizado ? valores.valorUtilizado : "Sem valor"}</b>
          </div>

          <div className="line">
            <b className="cor_5 p1"> Saldo: </b>
            <b className="cor_5 p3">R$</b>
            <b className="cor_0 p2">{valores?.valorRestante ? valores.valorRestante : "Sem valor"}</b>
          </div>

        </Content>

        <Content>

          <div className="line ">
            <p className="cor_5"></p>
            <p className="cor_5"></p>
          </div>

          <div className="line ">
            <p className="cor_5">Horas previstas: </p>
            <p className="cor_0">{valores?.horasPrevistas ? valores.horasPrevistas : "0"} Horas</p>
          </div>

          <div className="line">
            <p className="cor_5">Horas trabalhadas: </p>
            <p className="cor_0">{valores?.horasTrabalhadas ? valores.horasTrabalhadas : "0"} Horas</p>
          </div>

          <div className="line ">
            <p className="cor_5"></p>
            <p className="cor_5"></p>
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
                ['Horas', horasRestantes]
              ]}

              options={{
                pieHole: 0.70,
                title: "",
                pieSliceBorderColor: "none",
                colors: ['#00579D', '#EEE9E9', '#eaeaea' ],
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
              <p className="used-size">{valores?.horasTrabalhadas}<span>h</span></p>
              <p className="total-size"> of {valores?.horasPrevistas}h</p>
            </div>
          </div>

          <div className="table_header">
            <div className="table cor_5">
              Despesas(Desembolso)
            </div>
            <div className="table cor_5">
              Valor (R$)
            </div>
            <div className="table cor_5">
              CC Pagante
            </div>
          </div>

          <div className="contDetails">
            <ContDetails/>
          </div>

        </Content>

        <BttnPosition>
          <a href={LinkAprovar + id}>
            <ButtonAprovar />
          </a>
        </BttnPosition>
      </All>
    </>
  )
}

export default Detalhes;
