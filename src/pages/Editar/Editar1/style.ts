import styled from "styled-components";

export const All = styled.div`
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    flex-direction: row;

`;

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


export const Content_cards = styled.div`
  width: 85%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 10px 60px 0px 60px;
`;
