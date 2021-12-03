import styled from "styled-components";
//Revisado 03/12/2021
export const Container = styled.button`
  background-color: #0090C5;
  width:25%;
  height:40px;
  border-radius: 5px;
  border: none;

  &:hover{
    background: #00579D;
  }

  .container_button{
    background-color: #0090C5;
    width:100%;
    height:40px;
    display: flex;
    border-radius: 5px;
    color: white;
    font-size: 15px;

    &:hover{
      background: #00579D;
    }
    
    p{
      margin-left: 2px;
      margin-top: 13px;
    }
  }

  .container_icon{
    background-color: #00579D;
    width:31%;
    height:40px;
    display: flex;
    border-radius: 5px 0px 0px 5px;
    padding-top: 8px;
    padding-left: 3px;
  }
`;
