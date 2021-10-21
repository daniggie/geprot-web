import styled, { css } from "styled-components";
import { shade } from "polished";

interface TableProps{
  overlay: boolean;
};

export const Container=styled.div<TableProps>`
  width:10%;
  height: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  .atribuir{
    button{
      display:flex;
      justify-content: center;
      padding: 3px 10px 3px 10px;
      border: 0px;
      border-radius: 5px;
      background: #30a130;
      transition: 0.2s;
      &:hover{
        background: ${shade(0.2, "#30a130")};
      }
    }
  }

  #atribuir{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.30);
    transition: 0.5s;

    ${(props) =>
      props.overlay &&
      css`
        visibility: hidden;
        opacity: 0;
      `
    }

    ${(props) =>
      !props.overlay &&
      css`
        visibility: visible;
        opacity: 1;
      `
    }

    .overlay{
      position: absolute;
      width: 30%;
      height: 70px;
      border-radius: 10px;
      background: #fff;
      padding: 15px;
      display:flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;

      p{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 30px;
      }

      img{
        width: 3%;
        height: 30px;
        cursor: pointer;
      }

      input{
        width:25%;
        height: 25px;
        padding: 0px 5px 0px 5px;
      }

      button{
        display:flex;
        justify-content: center;
        padding: 3px 5px 3px 5px;
        border: 0px;
        border-radius: 5px;
        background: #00579D;
        transition: 0.2s;
        &:hover{
          background: ${shade(0.2, "#0091BD")};
        }
      }
    }
  }
`;
