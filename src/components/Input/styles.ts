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
  color: #0091BD;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: rgb(197, 48, 48);
      color: rgb(197, 48, 48);
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #0091BD;
      border-color: #0091BD;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #0091BD;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #0091BD;
    &::placeholder {
      color: #0091BD;
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
