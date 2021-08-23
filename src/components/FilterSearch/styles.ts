import styled from "styled-components";

export const Container = styled.div`
  width: 24%;
  display:flex;
  align-items: center;

  .arrow{
    margin-top: 2px;
  }

  button{
    width: 50px;
    height: 25px;
    border: 0.1px solid #828282;
    border-left: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    border-color:  #0091BD;
  }

  .procurar{
    width: 70%;
    height: 25px;
    border: 0.1px solid #828282;
    border-right: 0px;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    margin-left: 5px;
    font-size: 15px;
    padding: 5px;
  }
`;
