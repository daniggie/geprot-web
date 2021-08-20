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

