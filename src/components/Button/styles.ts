import styled from "styled-components";

import { shade } from 'polished'

export const Container = styled.button`
width: 205px;
background: #0091BD;
border-radius: 5px;
border:0px;
float:right;
display:flex;
justify-content: center;
align-items: center;
padding: 10px;

p{
  font-size:25px;
  color:#fff;
  display:flex;
  justify-content: center;
  font-style:normal;
}

transition: background-color 0.2s;

&:hover {
    background: ${shade(0.2, '#0091BD')}
}
`;
