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

  .cor_000{
    color: #fff;
  }

  .cor_black{
    color: #000;
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

  .cor_5{
    color: #00579D;
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

  .cor_5f{
    background-color: #0091BD;
  }

  .cor_6f {
      background-color: #00579E;
  }

  .cor_0f {
      background-color: #fff;
  }

  .cor_000f {
      background-color: #dbdbdb;
  }

  .red {
    background: #FF0000;
  }

  .blueProgress {
      background: #FFB800;
  }

  .green {
      background: #00C42B;
  }

  .gray {
      background: #828282;
  }

  .fonte_10 {
    font-size: 10px;
  }

  .fonte_11 {
    font-size: 11px;
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

  .fonte_20 {
    font-size: 20px;
  }

  .fonte_28 {
    font-size: 28px;
  }


  .helvetica {
    font-family: Arial, Helvetica, sans-serif;
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

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  a{
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
}


::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #00579D;
}
`
