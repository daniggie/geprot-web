import styled from "styled-components";

export const Container = styled.a`
width: 205px;
background: #fff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
float:right;
display:flex;
justify-content: center;
align-items: center;
padding: 10px;

&:hover{
  background: #dedede;
  transition: 0.4s;
}
p{
  font-size:25px;
  display:flex;
  justify-content: center;
  font-style:normal;
}
`;
