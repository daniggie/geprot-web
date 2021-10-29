import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps{
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
width: 93%;
border-radius: 4px;
padding: 5px;
height: 40px;
color: #00579E;

border: 1.9px solid #f4ede8;

display: flex;
align-items: center;

& + div{
  margin-top: 8px;
}

${(props) =>
props.isErrored &&
css`
  border-color: #c53030;
`}

${(props) =>
props.isFocused &&
css`
  border-color: #00579E;
`}

${(props) =>
props.isFilled &&
css`
  border-color: #00579E;
`}

input{
    border-radius:5px;
    border: 1px;
    padding: 5px;
    flex: 1;
    background: transparent;
    border: 0;
    color: #00579E;
    color: #00579E;

    &::placeholder{
        color: #00579E;
    }
}
}
`;

export const Error = styled(Tooltip)`
`;