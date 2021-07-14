import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, button{
    font: 16px Helvetica, sans-serif;
  }

  #root{
    width: 100%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  .cor_1 {
    color: #0075B1;
  }

  .cor_2 {
    color: #2382BA;
  }

  .cor_3 {
      color: #0091BD;
  }

  .cor_4 {
      color: #28B9DA;
  }

  .cor_0 {
      color: #828282;
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

  .red {
    background: #FF0000;
  }

  .yellow {
      background: #FFB800;
  }

  .green {
      background: #00C42B;
  }

  .fonte_12 {
    font-size: 12px;
  }

  .fonte_13 {
      font-size: 13px;
  }

  .fonte_14 {
      font-size: 14px;
  }

  .fonte_15 {
      font-size: 15px;
  }

  .fonte_25 {
      font-size: 25px;
  }

  .helvetica {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
  }


  /*Weight*/

  .bold {
    font-weight: bold;
  }

  .lighter {
    font-weight: lighter;
  }

  .normal {
    font-weight: normal;
  }

`
