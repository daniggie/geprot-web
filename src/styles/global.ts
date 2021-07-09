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

  body, input, button{
    font: 16px Helvetica, sans-serif;
  }

  #root{
    width: 100%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

`
