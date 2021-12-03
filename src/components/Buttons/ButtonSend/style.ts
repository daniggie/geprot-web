import styled from "styled-components";
//Revisado 03/12/2021
export const Container = styled.div`
  width: 100px;
  height: 45px;
  background: #00579D;
  border-radius: 5px;

  display:flex;
  justify-content: center;
  align-items: center;

  margin-top: 15px;

  cursor: pointer;

  &:hover{
    background: #0078bd;
    transition: 0.4s;
  }

  p{
    color:#fff;
  }
`;
