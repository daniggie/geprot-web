import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 55px;
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
        margin-top: 5px;
        font-weight: bold;
      }

      #logo_weg{
        margin: 13px;

      }
    }

    #content_translator{
      width: 115px;
      height: 55px;
      display:flex;
      align-items: center;

      #translator_select{
        margin-top: 10px;
      }

      #translator_flag {
      width: 32px;
      height: 32px;
      margin: 5px 20px 0px 5px;
      }

      #content_exit{
        margin-top: 8px;
      }

    }
`;
