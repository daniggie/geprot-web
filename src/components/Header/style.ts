import styled from "styled-components";

export const Container = styled.div`
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