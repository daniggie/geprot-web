import styled from "styled-components";

export const Container = styled.div`
    width: 17%;
    display:flex;
    align-items: center;

    .arrow{
      margin-top: 2px;
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
      width: 161px;
      padding-left: 15%;
      padding-right: 15%;
    }
`;
