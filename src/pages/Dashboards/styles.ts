import styled from 'styled-components';
import { shade } from 'polished';


export const TituloF = styled.div`
    height: 30px;
    width: 93%;
    margin-top: 40px;
    padding: 10px 113px 25px 20px;
    display: flex;

    p{
      color: #0091BD;
      font-size: 20px;
      margin-right: 10px;
    }

    div{
      height: 3px;
      width: 100%;
      margin-top: 12px;
      background: #0091BD;
    }
`;

export const All = styled.div`
    display: flex;
    align-content: space-around;
    flex-wrap: nowrap;
    margin-top: 20px;

`;

export const Filtros = styled.div`
    width: 91%;
    height: 30px;
    display:flex;
    justify-content: space-around;
    margin-left: -9px;

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;


    .content_title {
      width: 25%;
      display:flex;
      align-items: center;

      &:first-child{
        width: 20%;
      }
    }

    form post{
      background: red;
    }

    .texto{
      margin-left: 0px;
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
      width: 150px;
      padding-left: 10%;
      padding-right: 10%;
    }
`;

export const BodyDashboards = styled.div`
  width: 85%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 0 0 0 25px;
  margin-top: 50px;
  margin-left: 10px
`;

export const Container = styled.div`
  width: 100%;
  height: 220px;
  margin-bottom: 30px;
  display: flex;
`;

export const LitlleCont = styled.div`
  width: 21%;
  margin-left: 55px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div{
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 11px;
  }

`;

export const MediumCont = styled.div`
  width: 25%;
  border-radius: 5px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div{
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 11px;
  }
`;

export const BigCont = styled.div`
  width: 73%;
  margin-left: 55px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div{
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 11px;
  }
`;
