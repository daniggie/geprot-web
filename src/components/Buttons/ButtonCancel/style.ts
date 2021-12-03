import styled from "styled-components";
//Revisado 03/12/2021
export const Container = styled.a`
  width: 205px;
  background: #fff;
  border:  1px solid #dedede;
  border-radius: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &:hover{
    background: #dedede;
    transition: 0.1s;
  }
  p{
    font-size:20px;
    display:flex;
    justify-content: center;
  }
`;
