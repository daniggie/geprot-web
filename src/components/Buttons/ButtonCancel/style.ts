import styled from "styled-components";

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
  transition: 0.4s;
}
p{
  font-size:20px;
  display:flex;
  justify-content: center;
  font-style:normal;
}
`;
