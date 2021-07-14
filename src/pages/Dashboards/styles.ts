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

export const TituloF = styled.div`
    height: 30px;
    width: 100%;
    margin-top: 50px;
    padding: 10px 90px 25px 90px;
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

export const Menu = styled.div`
  width: 15%;
  height: 500px;
  display:flex;
  justify-content: flex-end;
  align-items: center;

  #menu{
    width: 400px;
    height: 275px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-end;

    .content_atalho{
      width: 50px;
      height: 60px;
      display: flex;
      margin-top: 2px;

      #idparagrafo{
        display:none;
        margin-top: 10px;
        margin-left: 10px;

        font-family: Arial, Helvetica, sans-serif;
        font-style: normal;
        font-size: 15px;
        color: white;
      }

      .atalho{
        width: 50px;
        margin-top: 2px;
        padding: 5px;
        display:flex;

        svg{
          margin: 2px 0px 0px 5px;
        }
      }

      &:hover{
        width:185px;
        transition-duration: 0.5s;

        #idparagrafo{
          display:block;
          margin-top: 10px;
          margin-left: 15px;
          transition-duration: 0.5s;

          font-family: Arial, Helvetica, sans-serif;
          font-style: normal;
          font-size: 15px;
          color: white;
        }
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
    height: 30px;
    display:flex;
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

    form post{
      background: red;
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
