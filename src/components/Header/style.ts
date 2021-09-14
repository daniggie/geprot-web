import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

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

    #content_all{
      width: 16%;
      display:flex;
      align-items: center;
      justify-content: space-around;

      #flag{
        width: 55%;
        padding-top: 7px;
        display: flex;
        align-items: center;
      }

    }
`;
