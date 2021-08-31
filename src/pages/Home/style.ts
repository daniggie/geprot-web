import styled, { css } from 'styled-components';

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
    flex-wrap: wrap;
    margin-top: 20px;
    flex-direction: row;

`;

export const Content_cards = styled.div`
  width: 85%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 20px;
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

    .content_title{
      display: flex;
      align-items: center;
    }

    .arrow{
      margin-top: 2px;
    }

`;

