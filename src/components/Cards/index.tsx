import React, { useState, FormEvent, useEffect } from "react";
import { Content_cards } from "./style";
import api from "../../services/api";

import relogio from '../../icons/relogio.svg';


interface Card {
  projeto : {
    id: number;
    nome: string;
    datainicio: string;
    datafinalizacao: string;
    datacadastro: string;
    horasprevistas: number;
    horastrabalhadas: number;
    valor: number;
    valorutilizado: number;
    valorrestante: number;
    status: string;
  };
}

const Cards: React.FC = () => {
  const [ valores, setValores ] = useState<Card[]>([]);
  useEffect(() => {
    api.get(`projetos/listar`).then( response => {
        setValores(response.data)
      }
    )
  }, [])
  console.log(valores.map(valor => valor.projeto.nome));

  const[newCard, newSetCard] = useState('');
  const[consulta, setConsulta] = useState<Card>();

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();

    try{

      const response = await api.get<Card>(`projetos/listar`);
      const consulta = response.data;
      console.log(consulta);

    }catch(err){
      console.log("Deu merda");
    }
}


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
                            Seção
                        </div>
                    </div>

                    <div className="card_status_txt">

                        <div className="cor_black fonte_12 helvetica ">
                            Status:
                        </div>

                        <div className="cor_black fonte_12 helvetica bold ">
                            {consulta ? consulta.projeto.status : "não chegou"}
                        </div>

                    </div>
                </div>

                <div className="linha_2">
                    <div className="card_title">

                        <div className="cor_black fonte_25 helvetica bold">
                        {consulta ? consulta.projeto.id : "não chegou"} - {consulta ? consulta.projeto.nome : valores.map(valor => valor.projeto.nome)}
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
                            {consulta ? consulta.projeto.valor : "não chegou"}
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
                        {consulta ? consulta.projeto.horasprevistas : "não chegou"} H
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
                            {consulta ? consulta.projeto.valorrestante : "não chegou"}
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
                        {consulta ? consulta.projeto.horastrabalhadas : "não chegou"} H
                        </div>

                    </div>

                </div>

                <div className="linha_3">
                    <div className="texto_content_horas">
                        <div className="cor_0 fonte_14 helvetica">
                            Dê: {consulta ? consulta.projeto.datainicio : "não chegou"}
                        </div>

                        <div className="cor_0 fonte_14 helvetica">
                            Até: {consulta ? consulta.projeto.datafinalizacao : "não chegou"}
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

