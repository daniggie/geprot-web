import styled from "styled-components";

export const Container = styled.div`
width: 100px;
background: #0091BD;
border-radius: 5px;
display:flex;
justify-content: center;
align-items: center;
margin-top: 15px;
height: 45px;
cursor: pointer;

&:hover{
  background: #0078bd;
  transition: 0.4s;
}
p{
  color:#fff;
  display:flex;
  justify-content: center;
}
`;
