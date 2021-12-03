import styled, { css } from "styled-components";
import { shade } from "polished";
import Tooltip from "../Tooltip";

interface TableProps{
  popup: boolean;
  overlay: boolean;
  isAllocated: boolean;
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

      ${(props) => 
          props.isAllocated &&
          css `
            background: #b8b4ab;
            cursor: not-allowed;
            transition: 0.2s;
            &:hover{
              background: ${shade(0.2, "#a19d92")};
            }
          `
        }
    }
  }

  .popup{

    ${(props) =>
      props.popup &&
      css`
      visibility: hidden;
      opacity: 0;
    `}

    ${(props) =>
      !props.popup &&
      css`
      visibility: visible;
      opacity: 1;
    `}

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.30);
    transition: 0.5s;

    .popSkill{
      position: fixed;
      top: 0;
      bottom: 0; 
      left: 0; 
      right:0;
      margin: auto;
      width: 400px;
      height: 200px;
      background: white;
      border-radius: 5px;
      box-shadow:0px 4px 4px rgb(0 0 0 / 25%);
      display: flex;
      flex-direction: column;

      #barra{
        background-color: #00579D;
        width: 100%;
        height: 30px;
        border-radius: 5px 5px 0px 0px;
        display: flex;
        align-items: center;
        padding: 5px;
        color: #fff;
      }

      .lines{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        height: 100%;
        margin-top: 5px;
        overflow: scroll;

        #listaSkills{
          margin-top: 5px;
          padding: 0;
          width: calc(100%/1);
          height: 15%;
          input, label{
            margin-left: 10px;
          }
        }
      }
        
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
        height: 20px;
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

      
    }
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
`;

export const Error=styled(Tooltip)`
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
