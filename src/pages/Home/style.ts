import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
};

//Status descomponentizado
export const Container = styled.div`
    width: 16%;
    display:flex;
    align-items: center;

    .texto{
    }

    .arrow{
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;

export const ContFilter = styled.div`
  height: 25px;
  box-sizing: border-box;
  width: 110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #00579E;
  border-radius: 3px;
  color: #fff;
  z-index:0;
  margin-left: 5px;

  a {
    text-decoration: none;
    color: #fff;
  }

  .lang-menu {
      width: 110px;
      text-align: right;
      font-weight: 540;
      position: relative;
  }

  .lang-menu .selected-lang {
      display: flex;
      justify-content: space-between;
      line-height: 1.7;
      cursor: pointer;
      padding-left: 10px;
  }

  .lang-menu ul {
      margin: 0;
      padding: 0;
      display: none;
      background-color: #00579E;
      border: none;
      position: absolute;
      top: 27px;
      left: 0px;
      width: 110px;
      border-radius: 3px;
      box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  }


  .lang-menu ul li {
      list-style: none;
      text-align: left;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
  }

  .lang-menu ul li a {
      text-decoration: none;
      width: 110px;
      padding: 5px 10px;
      display: block;
  }

  .lang-menu ul li:hover {
      background-color: rgba(0,0,0,0.2);
  }

  .lang-menu:hover ul {
      display: block;
  }
`;
//Status descomponentizado

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
  width: 80%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
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
      display: flex;
      align-items: center;
    }

`;

export const Content_not = styled.div`
  width: 10%;
  display: flex;
`;

export const ContainerSearch = styled.div`
  width: 24%;
  display:flex;
  align-items: center;

  .arrow{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button{
    width: 50px;
    height: 25px;
    border: 0.1px solid #828282;
    border-left: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    border-color: #00579E;
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
`;
