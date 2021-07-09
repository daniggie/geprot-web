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

    .cor_1f {
      background-color: #0075B1;
    }

    .cor_2f {
        background-color: #2382BA;
    }

    .cor_3f {
        background-color: #0091BD;
    }

    .cor_4f {
        background-color: #28B9DA;
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

