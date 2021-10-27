import styled, { css } from "styled-components";
import Tooltip from "../../Tooltip";


export const Contant = styled.div`
  .columns{
    display:flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    border-bottom-color: #DCDCDC;

    .column1{

      width:calc(50%/3);
      height: 50px;
      display:flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;

      p{
        display:flex;
        justify-content: center;
      }

      }

    .column2{
      width: calc(50%/2);
      height: 50px;
      display:flex;
      justify-content: center;
      align-items: center;

      p{
        display:flex;
        justify-content: flex-start;
      }
    }

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

