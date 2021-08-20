import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50px;
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
        margin-top: 0px;
        font-weight: bold;
      }

      #logo_weg{
        margin-top: 10px;
      }
    }

    #content_translator{
      width: 110px;
      height: 53px;
      display:flex;
      align-items: center;

      #translator_select{
        margin-top: 0px;
      }
      
      #translator_flag {
      width: 32px;
      height: 32px;
      margin: 0px 15px 0px 5px;
      }

      #content_exit{
        margin: 3px 0px 0px 5px;
      }

    }
`;