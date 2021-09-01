import React, { useState, FormEvent, useEffect } from "react";
import { Content_cards } from "./style";
import api from "../../services/api";

import relogio from '../../icons/relogio.svg';


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
}

const Cards: React.FC = () => {
  const [ valores, setValores ] = useState<Card[]>([]);

  useEffect(() => {
    async function carregaDados(): Promise<void>  {
      await api.get(`projetos/listar`).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [ ])

    return(
        <Content_cards>
          {valores.map(valor => (
            <div className="card_type">

            <div className="card_status_color yellow">
              </div>
              <div className="card_informacao">
                  <div className="linha_1">
                      <div className="card_secao">
                          <div className="cor_4 fonte_12 helvetica ">
                              Seção
                          </div>
                      </div>
                      <div className="card_status_txt">
                          <div className="cor_black fonte_12 helvetica ">
                              Status:
                          </div>
                          <div className="cor_black fonte_12 helvetica bold ">
                              {valor.status }
                          </div>
                      </div>
                  </div>
                  <div className="linha_2">
                      <div className="card_title">
                          <div className="cor_black fonte_25 helvetica bold">
                            {valor.id ? valor.id : "0"} - {valor.nome ? valor.nome : "projeto"}
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
                              { valor.valor ? valor.valor : "0"}
                              </div>
                          </div>
                      </div>
                      <div className="texto_content_horas">
                          <div className="cor_black horas fonte_14 helvetica">
                              Horas:
                          </div>
                          <div className="relogio ">
                              <img src={relogio} alt=" " />
                          </div>
                          <div className="cor_0 fonte_14 helvetica">
                          { valor.horasPrevistas ? valor.horasPrevistas : "0" } H
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
                              { valor.valorRestante ? valor.valorRestante : "0" }
                              </div>
                          </div>
                      </div>
                      <div className="texto_content_horas">
                          <div className="cor_black fonte_14 helvetica">
                              Apontadas:
                          </div>
                          <div className="relogio">
                              <img src={relogio} alt=" " />
                          </div>
                          <div className="cor_0 fonte_14 helvetica">
                          { valor.horasTrabalhadas ? valor.horasTrabalhadas : "0" } H
                          </div>
                      </div>
                  </div>
                  <div className="linha_3">
                      <div className="texto_content_horas">
                          <div className="cor_0 fonte_14 helvetica">
                              Dê: { valor.dataInicio ? valor.dataInicio : "Não iniciado" }
                          </div>
                          <div className="cor_0 fonte_14 helvetica">
                              Até: { valor.dataFinalizacao ? valor.dataFinalizacao : "Não iniciado" }
                          </div>
                      </div>
                      <div className="content_barra">
                          <div className="green content_carregamento">
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          ))}
        </Content_cards>
    );
};

export default Cards;

