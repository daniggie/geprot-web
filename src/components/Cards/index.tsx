import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { Content_cards } from "./style";
import { FiClock } from "react-icons/fi";

//Revisado 03/12/2021
interface IdentificaCard {
  id: number;
  nome: string;
  dataInicio: string;
  dataFinalizacao: string;
  horasPrevistas: number;
  horasTrabalhadas: number;
  valor: number;
  valorRestante: number;
  status: string;
  barraProgresso: number;
}

const Cards: React.FC<IdentificaCard> = ({id, nome, dataInicio, dataFinalizacao, horasPrevistas, horasTrabalhadas, valor, valorRestante, status, barraProgresso}) => {
    const paginaDetalhes = "/detalhes/";
   
    const [perfil] = useState(() => {
      let usuario = localStorage.getItem('@Geprot:gestor');
  
      if(usuario) {
        let languageObject = JSON.parse(usuario);
          return languageObject;
        }
    });

    return(
      <>
        <Content_cards status={status ? status: "0"} barraProgresso={barraProgresso ? barraProgresso : 0}>
          <a href={paginaDetalhes + id}>
            <div className="card_type">
              <div className="card_status_color"/>
              <div className="card_informacao">
                <div className="linha_1">
                  <div className="card_secao">
                    <div className="cor_5 fonte_12 helvetica ">
                      {perfil.secao.nome}
                    </div>
                  </div>
                  <div className="card_status_txt">
                    <div className="cor_black fonte_12 helvetica ">
                      Status:
                    </div>
                    <div className="cor_black fonte_12 helvetica bold ">
                      {
                        status == "EM_ANDAMENTO" ? "EM ANDAMENTO" :
                        status == "NAO_INICIADO" ? "NÃO INICIADO" :
                        status == "ATRASADO" ? "ATRASADO" :
                        status == "CONCLUIDO" ? "CONCLUÍDO" : "NÃO ENCONTRADO"
                      }
                    </div>

                    <div className="cor_black fonte_12 helvetica ">
                      <a href="/editar">
                        <FiEdit size={12} color="#828282"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="linha_2">
                  <div className="card_title">
                    <div className="cor_black fonte_25 helvetica bold">
                      {id ?id : "0"} - {nome ? nome : "projeto"}
                    </div>
                  </div>
                </div>
                <div className="linha_3">
                  <div className="card_saldo">
                    <div className="cor_black fonte_14 helvetica">
                      Saldo previsto:
                    </div>
                    <div className="texto">
                      <div className="texto cor_0 fonte_14 helvetica">
                        R$
                      </div>
                      <div className="texto cor_0 fonte_14 helvetica">
                        { valor ? valor : "0"}
                      </div>
                    </div>
                  </div>
                  <div className="texto_content_horas">
                    <div className="cor_black horas fonte_14 helvetica">
                      Horas:
                    </div>
                    <div className="relogio">
                      <FiClock size={17} color="#00579E"/>
                    </div>
                    <div className="cor_0 fonte_13 horas helvetica">
                      { horasPrevistas ? horasPrevistas : "0" } H
                    </div>
                  </div>
                </div>
                <div className="linha_3">
                  <div className="card_saldo">
                    <div className="cor_black fonte_14 helvetica">
                      Saldo restante:
                    </div>
                    <div className="texto">
                      <div className="texto cor_0 fonte_14 helvetica">
                        R$
                      </div>
                      <div className="texto cor_0 fonte_14 helvetica">
                        { valorRestante ? valorRestante : "0" }
                      </div>
                    </div>
                  </div>
                  <div className="texto_content_horas">
                    <div className="cor_black fonte_14 helvetica horas ">
                      Apontadas:
                    </div>
                    <div className="relogio">
                      <FiClock size={17} color="#00579E"/>
                    </div>
                    <div className="cor_0 fonte_13 helvetica horas">
                      { horasTrabalhadas ? horasTrabalhadas : "0" } H
                    </div>
                  </div>
                </div>
                <div className="linha_3">
                  <div className="texto_content_data">
                      <p className="cor_0 fonte_14 helvetica">Dê: { dataInicio ? dataInicio : "Não iniciado" }</p>
                      <p className="cor_0 fonte_14 helvetica"> Até: { dataFinalizacao ? dataFinalizacao : "Não informado" }</p>
                  </div>
                  <div className="content_barra">
                    <div className="green content_carregamento"/>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Content_cards>
      </>
    );
};

export default Cards;