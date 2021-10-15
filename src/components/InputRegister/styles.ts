import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps{
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
background: #232129;
border-radius: 4px;
padding: 16px;
width: 80%;

border: 2px solid #232129;
color: black;

display: flex;
align-items: center;

& + div{
  margin-top: 8px;
}

${(props) =>
props.isErrored &&
css`
    color: black;
    border-color: #ff9000;
`}

${(props) =>
props.isErrored &&
css`
    color: black;
    border-color: #c53030;
`}

${(props) =>
props.isFilled &&
css`
    color: black;
    border-color: #ff9000;
`}

input{
    flex: 1;
    backdround: transparent;
    border: 0;
    color: black;

    &::placeholder{
        color: black;
    }
}
}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  
  span {
    background: #c53030;
    color: #fff;
    
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;