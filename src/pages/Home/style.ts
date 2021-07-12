import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    align-content: center;

    #informations{

      display:flex;

      p {
      color: #0091BD;
      font-size: 15px;
      }

      h1{
        color: #0091BD;
        font-size: 25px;
        margin-top: 10px;
        font-weight: bold;
      }

      #logo_weg{
        margin: 10px;
      }
    }

    #content_translator{
      width: 100px;
      height: 70px;
      display:flex;
      align-items: center;


      #translator_flag {
      width: 32px;
      height: 32px;
      margin:10px;
      }

      #content_exit{
        margin-left: 5px;
      }

    }
`;

export const Body = styled.div`
  width: 85%;
  display:flex;
`;

export const Menu = styled.div`
  width: 15%;
  height: 500px;
  display:flex;
  justify-content: flex-end;
  align-items: center;

  #menu{
    width: 60px;
    height: 275px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    .atalho{
      width: 60px;
      height: 55px;
      display: flex;
      padding-top: 5px;
      margin-top: 2px;

      svg{
        margin: 2px 0px 0px 10px;
      }

    }

    #border1{
      border-radius: 5px 0px 0px 0px;
    }

    #border2{
      border-radius: 0px 0px 0px 5px;
    }

  }
`;
export const All = styled.div`
    display: flex;
    align-content: space-around;
    flex-wrap: nowrap;
    margin-top: 20px;

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


    .content_title {
      width: 10%;
      display:flex;
      align-items: center;
    }

    .texto{
      margin-left: 5px;
    }

    .content_procurar{
      width: 25%;
      display:flex;
      align-items: center;

      .procurar{
        width: 100%;
        height: 25px;
        border: 0.1px solid #828282;
        box-sizing: border-box;
        border-radius: 5px;
        margin-left: 5px;
        font-size: 15px;
        padding: 5px;
      }

    }
`;

