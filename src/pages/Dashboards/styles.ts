import styled from 'styled-components';
import { shade } from 'polished';


export const TituloF = styled.div`
    height: 30px;
    width: 95%;
    margin-top: 10px;
    padding: 15px 113px 25px 20px;
    display: flex;
    align-items: center;

    p{
      width: 5%;
    }

    hr{
      width: 95%;
      height: 2px;
      border-radius: 20px;
      border-width: 0px;
      background: #00579D;
      border-radius: 5px;
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
  width: 95%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0 0 25px;
  margin-left: 10px
`;

export const Container = styled.div`
  width: 100%;
  height: 220px;
  margin-bottom: 30px;
  display: flex;
`;

export const LitlleCont = styled.div`
  width: 20%;
  margin-left: 55px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .title{
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
  }

  .linelabel{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #labelOverlay {
    width: 90px;
    height: 45px;
    position: absolute;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    cursor: default;
  }

  #labelOverlay p {
    line-height: 0.3;
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
`;

export const ContFilter = styled.div`
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

export const ContLang = styled.div`
  height: 25px;
  box-sizing: border-box;
  width: 125px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #00579D;
  border-radius: 3px;
  color: #fff;
  z-index:1000;
  margin-left: 5px;

  a {
    text-decoration: none;
    color: #fff;
  }

  .lang-menu {
      width: 150px;
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
      background-color: #00579D;
      border: none;
      position: absolute;
      top: 27px;
      left: 0px;
      width: 150px;
      border-radius: 3px;
      box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  }


  .lang-menu ul li {
      list-style: none;
      text-align: left;
      display: flex;
      justify-content: space-between;
  }

  .lang-menu ul li a {
      text-decoration: none;
      width: 150px;
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
