import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
};

export const Error = styled.span`
  display: block;
  width: 100%;
  height: 30px;
  color: #fff;
  margin-top: 8px;
  padding: 5px;
  background: #c4c4c4;
  border-radius: 20px;
  text-align: center;
`;



export const Content_cards = styled.div`
  width: 85%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 20px;

  .card_type{
    min-width: 450px;
    width: 48%;
    height: 144px;
    display: flex;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #F0F0F0;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .card_status_color {
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
      width: 20%;
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
      margin-left: 5px;
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
      width: 90%;
      height: 100%;
  }

  .horas{
    width: 70px;
  }
}
`;

export const All = styled.div`
    display: flex;
    align-content: space-around;
    flex-wrap: nowrap;
    margin-top: 20px;

`;

export const Form = styled.form<FormProps>`

  input {
    ${props => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
`
export const Filtros = styled.div`
    width: 100%;
    height: 50px;
    display:flex;
    padding: 10px;
    margin-top:20px;
    justify-content: space-around;

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;


    .content_title {
      width: 10%;
      display:flex;
      align-items: center;
    }

    .texto{
      margin-left: 5px;
    }

    select {
      width: 100px;
      height: 25px;
      margin-left: 5px;
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      font-size: 15px;
      color: #fff;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      border: none;
      border-radius: 5px;
    }

    .status{
      width: 115px;
      padding-left: 15%;
      padding-right: 15%;
    }

    .content_procurar{
      width: 25%;
      display:flex;
      align-items: center;

      button{
        width: 50px;
        height: 25px;
        border: 0.1px solid #828282;
        border-left: 0;
        border-radius: 0px 5px 5px 0px;
        color: #fff;
        border-color:  #0091BD;
      }

      .procurar{
        width: 70%;
        height: 25px;
        border: 0.1px solid #828282;
        border-right: 0px;
        box-sizing: border-box;
        border-radius: 5px 0px 0px 5px;
        margin-left: 5px;
        font-size: 15px;
        padding: 5px;
      }

    }
`;

