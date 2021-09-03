import styled from "styled-components";

export const Container = styled.div`
    width: 16%;
    display:flex;
    align-items: center;

    .arrow{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    select {
      width: 100px;
      height: 25px;
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      font-size: 15px;
      margin-left: 5px;
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
`;
