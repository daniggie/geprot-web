import styled from "styled-components";

//Revisado 03/12/2021
export const Container = styled.div`
  width: 205px;
  background: #00579D;
  border-radius: 5px;

  display:flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  
  &:hover{
    background: #0078bd;
    transition: 0.4s;
  }
  
  p{
    font-size:20px;
    color:#fff;
    display:flex;
    justify-content: center;
  }
`;
