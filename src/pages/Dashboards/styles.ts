import styled from 'styled-components';
import { shade } from 'polished';


export const TituloF = styled.div`
    height: 30px;
    width: 95%;
    margin-top: 10px;
    padding: 15px 113px 25px 20px;
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
`;

export const BodyDashboards = styled.div`
  width: 85%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 0 0 0 25px;
  margin-top: 30px;
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
    padding-top: 12px;
    color: #fff;
  }

  table{
    width: 100%;
    height: 180px;
    color: #828282;
    text-align: center;
    font-size: 20px;
    border-radius: 5px;

    .impar{
      background: rgb(220, 220, 220, 0.5);
      border-radius: 5px;
    }

    .par{
      background: rgb(192, 192, 192, 0.7);
      border-radius: 5px;
    }

  }

`;

export const MediumCont = styled.div`
  width: 25%;
  border-radius: 5px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .title{
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 12px;
    color: #fff;
  }

  #labelOverlay2 {
    width: 90px;
    height: 45px;
    position: absolute;
    top: 545px;
    left: 125px;
    text-align: center;
    cursor: default;
  }

  #labelOverlay2 p {
    line-height: 0.3;
    padding:0;
    margin: 10px;
  }

  #labelOverlay2 p.used-size2 {
    line-height: 0.5;
    font-size: 20pt;
    color: #8e8e8e;
  }

  #labelOverlay2 p.total-size2 {
    line-height: 0.5;
    font-size: 12pt;
    color: #cdcdcd;
  }

  #labelOverlay {
    width: 90px;
    height: 45px;
    position: absolute;
    top: 295px;
    left: 125px;
    text-align: center;
    cursor: default;
  }

  #labelOverlay p {
    line-height: 0.3;
    padding:0;
    margin: 10px;
  }

  #labelOverlay p.used-size {
    line-height: 0.5;
    font-size: 20pt;
    color: #8e8e8e;
  }

  #labelOverlay p.total-size {
    line-height: 0.5;
    font-size: 12pt;
    color: #cdcdcd;
  }
`;

export const BigCont = styled.div`
  width: 73%;
  margin-left: 55px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .title{
      width: 100%;
      height: 40px;
      border-radius: 5px 5px 0 0;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding-top: 12px;
      color: #fff;
    }
  }
`;
