import React, { useState, useEffect } from "react";
import { Content_cards } from "./style";
import api from "../../../services/api";
import { FiClock } from "react-icons/fi";

interface Card {
    id: number;
    nome: string;
    dataInicio: string;
    dataFinalizacao: string;
    dataCadastro: string;
    horasPrevistas: number;
    horasTrabalhadas: number;
    valor: number;
    valorUtilizado: number;
    valorRestante: number;
    status: string;
    barraProgresso: number;
}

interface Status {
  id: number;
}

const Cards: React.FC<Status> = ({id}) => {
  const [ valor, setValor ] = useState<Card>();
  const [secao] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:usuario');

    if(usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
    }
  });

  useEffect(() => {
    async function carregaDados(): Promise<void>{
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`projetos/listar/projetos/${id}`, config).then(response => {
        setValor(response.data);
      })
    }
    carregaDados();
  }, [id])

  const teste = "/detalhes/";
  return(
      <>

        <Content_cards status={valor?.status ? valor?.status: "0"} barraProgresso={valor?.barraProgresso ? valor?.barraProgresso :0}>
          <a href={teste + valor?.id}>
            <div className="card_type">
            <div className="card_status_color">

              </div>
              <div className="card_informacao">
                  <div className="linha_1">
                      <div className="card_secao">
                          <div className="cor_5 fonte_12 helvetica ">
                              {secao.secao.nome}
                          </div>
                      </div>
                      <div className="card_status_txt">
                          <div className="cor_black fonte_12 helvetica ">
                              Status:
                          </div>
                          <div className="cor_black fonte_12 helvetica bold ">
                              {
                                valor?.status == "EM_ANDAMENTO" ? "EM ANDAMENTO" :
                                valor?.status == "NAO_INICIADO" ? "NÃO INICIADO" :
                                valor?.status == "ATRASADO" ? "ATRASADO" :
                                valor?.status == "CONCLUIDO" ? "CONCLUÍDO" : "NÃO ENCONTRADO"
                              }
                          </div>
                      </div>
                  </div>
                  <div className="linha_2">
                      <div className="card_title">
                          <div className="cor_black fonte_25 helvetica bold">
                            {valor?.id ? valor?.id : "0"} - {valor?.nome ? valor?.nome : "projeto"}
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
                              { valor?.valor ? valor?.valor : "0"}
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
                          <div className="cor_0 fonte_14 horas helvetica">
                          { valor?.horasPrevistas ? valor?.horasPrevistas : "0" } H
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
                              { valor?.valorRestante ? valor?.valorRestante : "0" }
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
                          <div className="cor_0 fonte_14 helvetica horas">
                          { valor?.horasTrabalhadas ? valor?.horasTrabalhadas : "0" } H
                          </div>
                      </div>
                  </div>
                  <div className="linha_3">
                    <div className="texto_content_data">
                        <p className="cor_0 fonte_14 helvetica">Dê: { valor?.dataInicio ? valor?.dataInicio : "Não iniciado" }</p>
                        <p className="cor_0 fonte_14 helvetica"> Até: { valor?.dataFinalizacao ? valor?.dataFinalizacao : "Não informado" }</p>
                    </div>
                    <div className="content_barra">
                        <div className="green content_carregamento">
                        </div>
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

