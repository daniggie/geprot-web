import React from "react";
import { All, Content, BttnPosition } from "./style";
import Button from "../../components/Button";
import Barra from "../../components/Barra";

const Detalhes: React.FC = () => {
    return(
        <>
        <a href="/home">
        <Barra>
        </Barra>
        </a>
        
        <All>
            <Content>
                <div className="line fonte_20 cor_0">
                    <p> Seção X </p>
                </div>

                <div className="line ">
                   <p className="fonte_25 cor_3">1000000000001 - Projeto GDT</p>
                   <p className="fonte_20 cor_1">ATA Nº 07/2020</p>
                </div>

                <div className="line ">
                   <p className="fonte_20 cor_1">Data inicial: </p>
                   <p className="fonte_20 cor_0">25/08/2020</p>
                   <div className="download fonte_20 cor_000 cor_3f">
                        ATA_CVDP_07_2020
                   </div>
                </div>

                <div className="line ">
                   <p className="fonte_20 cor_1">Data final: </p>
                   <p className="fonte_20 cor_0">20/12/2021</p>
                   <div className="download fonte_20 cor_000 cor_3f">
                        DASHBOARD
                   </div>
                </div>

                <div className="line fonte_20 cor_1">
                    <p> Objetivo: </p>
                </div>

                <div className="line fonte_20 cor_0">
                    <p> Reduzir a atividade manual da equipe interna WEC na entrada de
                        ordens de venda (OV), envio da confirmação e aviso de remessa
                        ao Cliente XYZ USA. Atender solicitação do cliente para automatizar o envio de pedidos e atualização do próprio sistema
                        através do EDI (Eletronic Data Interchange). O Cliente já
                        implementou este sistema nos principais fornecedores. </p>
                </div>

                <div className="line">
                    <p className="fonte_20 cor_1"> Valor do projeto: </p>
                    <p className="fonte_20 cor_0"> R$ 15.000,00</p>
                </div>

                <div className="line">
                    <p className="fonte_20 cor_1"> Saldo </p>
                    <p className="fonte_20 cor_0"> R$ 10.000,00</p>
                </div>

                <div className="line">
                    <p className="fonte_20 cor_1"> Valor consumido: </p>
                    <p className="fonte_20 cor_0"> R$ 5.000,00</p>
                </div>



            </Content>

            <Content>

                <div className="line ">
                   <p className="fonte_20 cor_1">Horas previstas: </p>
                   <p className="fonte_20 cor_0">120 Horas</p>
                </div>

                <div className="line">
                   <p className="fonte_20 cor_1">Horas trabalhadas: </p>
                   <p className="fonte_20 cor_0">120 Horas</p>
                </div>

                <div className="line">
                    <div className="grafico">

                    </div>
                </div>

                <div className="table_header">
                    <div className="table fonte_20 cor_1">
                        Despesas(Desembolso)
                    </div>
                    <div className="table fonte_20 cor_1">
                        Valor (R$)
                    </div>
                    <div className="table fonte_20 cor_1">
                        CC Pagante
                    </div>
                </div>

                <div className="table_content">
                    <p className=" table fonte_20 cor_1"> Desenvolvimento
                        Externo das integrações
                        com fornecedor de EDI
                        homologado (GXS Grid
                        by Open Text) </p>
                    <p className="table fonte_20 cor_1"> R$ 5.000.000,00 </p>
                    <p className="table fonte_20 cor_1"> 20168060 </p>

                </div>

            </Content>
        </All>

        <BttnPosition>
            <a href="/aprovarhoras">
            <Button type="submit">Aprovar Horas</Button></a>
        </BttnPosition>
        
        </>
    )
}

export default Detalhes;