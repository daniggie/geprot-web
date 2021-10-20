import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #f4ede8;
  color: #00579E;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #00579E;
      border-color: #00579E;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #00579E;
      border-color: #00579E;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #00579E;
    &::placeholder {
      color: #00579E;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
