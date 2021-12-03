import styled from "styled-components";

import { shade } from 'polished';
//Revisado 03/12/2021
export const Container = styled.button`
  background-color: #0090C5;
  width:25%;
  height:40px;
  border-radius: 5px;
  border: none;

  transition: 0.2s;
  &:hover{
    background: ${shade(0.2, "#00579D")};
  }
`;
