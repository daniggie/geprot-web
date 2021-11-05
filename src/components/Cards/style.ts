import styled, { css } from "styled-components";
import { shade } from "polished";

interface CorCardPorps {
  status: string;
  barraProgresso : number;
}

export const Content_cards = styled.div<CorCardPorps>`
  display: flex;
  flex-wrap: wrap;

  .card_type{
    min-width: 450px;
    width: 40%;
    height: 144px;
    display: flex;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #F0F0F0;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-right: 20px;
    transition: 0.3s;;
  }

  .card_type:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${shade(0.2, "#fff")};
    margin-left: 5px;
  }

  .card_status_color {

    ${(props) =>
      props.status == "ATRASADO" &&
      css`
        background-color: #d95050;
      `}

      ${(props) =>
      props.status == "EM_ANDAMENTO" &&
      css`
        background-color: #2382BA;
      `}

      ${(props) =>
      props.status == "NAO_INICIADO" &&
      css`
        background-color: gray;
      `}

      ${(props) =>
      props.status == "CONCLUIDO" &&
      css`
        background-color: #3fbf5b;
      `}
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 15px;
      height: 142px;
      border-radius: 5px 0px 0px 5px;

  }

  .card_secao {
      width: 65%;
      height: 14px;
  }

  .card_informacao {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 10px;
      justify-content: space-evenly;
  }

  .linha_1 {
      display: flex;
      width: 100%;
      justify-content: flex-start;
  }

  .linha_2 {
      display: flex;
      flex-direction: row;
      width: 100%;
  }

  .linha_3 {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
  }

  .linha_4 {
      display: flex;
      flex-direction: row;
      width: 100%;
  }

  .card_status_txt {
      display: flex;
      justify-content: space-between;
      width: 40%;
  }

  .card_saldo {
      display: flex;
      justify-content: space-between;
      width: 65%;
  }

  .texto {
      display: flex;
      width: 50%;
      justify-content: space-between;
  }

  .texto_content_horas {
      display: flex;
      width: 48%;
      justify-content: space-between;
  }

  .texto_content_data {
      display: flex;
      width: 55%;
      justify-content: space-between;
      p{
        width: 50%;
        display: flex;
      }
  }

  .relogio {
      width: 15px;
      height: 15px;
  }

  .content_barra {
      width: 42%;
      height: 5px;
      background: #dddddd;
      margin-top: 5px;
  }

  .content_carregamento {
      width: ${(props) =>
      props.barraProgresso}%;
      height: 100%;
  }

  .horas{
    width: 20%;
  }
`;
