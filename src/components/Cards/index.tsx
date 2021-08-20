import React from "react";
import { Content_cards } from "./style";

import relogio from '../../icons/relogio.svg';

const Cards: React.FC = () => {
    return(
        <Content_cards>

        <a href="/detalhes">
        <div className="card_type">

            <div className="card_status_color yellow">

            </div>

            <div className="card_informacao">

                <div className="linha_1">

                    <div className="card_secao">
                        <div className="cor_4 fonte_12 helvetica ">
                            Seção - X
                        </div>
                    </div>

                    <div className="card_status_txt">

                        <div className="fonte_12 helvetica ">
                            Status:
                        </div>

                        <div className="fonte_12 helvetica bold ">
                            Teste
                        </div>

                    </div>
                </div>

                <div className="linha_2">
                    <div className="card_title">

                        <div className="fonte_25 helvetica bold">
                            00001252 - Nome do projeto
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="card_saldo">

                        <div className="fonte_14 helvetica">
                            Saldo previsto:
                        </div>

                        <div className="texto">

                            <div className="texto cor_0 fonte_14 helvetica">
                                R$
                            </div>

                            <div className="texto cor_0 fonte_14 helvetica">
                                12.000,00
                            </div>

                        </div>



                    </div>

                    <div className="texto_content_horas">
                        <div className="horas fonte_14 helvetica">
                            Horas:
                        </div>
                        <div className="relogio ">
                            <img src={relogio} alt=" " />
                        </div>
                        <div className="cor_0 fonte_14 helvetica">
                          95 H
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="card_saldo">

                        <div className="fonte_14 helvetica">
                            Saldo restante:
                        </div>

                        <div className="texto">

                            <div className="texto cor_0 fonte_14 helvetica">
                                R$
                            </div>

                            <div className="texto cor_0 fonte_14 helvetica">
                              1.500,00
                            </div>

                        </div>



                    </div>

                    <div className="texto_content_horas">
                        <div className="fonte_14 helvetica">
                            Apontadas:
                        </div>

                        <div className="relogio">
                            <img src={relogio} alt=" " />
                        </div>

                        <div className="cor_0 fonte_14 helvetica">
                            50 H
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="texto_content_horas">
                        <div className="cor_0 fonte_14 helvetica">
                            Dê: 02/02/2020
                        </div>

                        <div className="cor_0 fonte_14 helvetica">
                            Até: 05/05/2021
                        </div>

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
    );
};

export default Cards;

