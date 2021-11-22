import styled, { css } from "styled-components";

interface TableProps{
  overlay: boolean;
};

export const ContainerAlert = styled.div<TableProps>`
  width: 95%;
  .line{
    display: none;
    font-size: 12px;
    width: 100%;
    border-radius: 5px;
    padding: 2px;
    margin-top: 10px;
    justify-content: space-between;
    transition: 0.8s;

    &:hover{
      max-height: 100px;
      min-height: 40px;

      .text{
        white-space: normal;
        overflow: visible;
        max-height: 100px;
      }
    }
    .icon{
      margin-left: 80%;
    }

    .text{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-height: 16px;
      margin-top: 5px;
      transition: 0.8s;
      cursor: pointer;

    }

    .title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 70%;
    }

  }

  .details{
    ${(props) =>
      props.overlay &&
      css`
        visibility: hidden;
        opacity: 0;
    `}

    ${(props) =>
      !props.overlay &&
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

    b{
        margin-bottom: 15px;
    }
    p{
      margin-bottom: 5px;
    }

    .overlay{
      position: fixed;
      width: 30%;
      min-height: 70px;
      border-radius: 10px;
      background: #fff;
      padding: 10px;
      display:flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      z-index: 9999;
      box-shadow:2px 2px 15px 5000px rgb(0,0,0,0.5);
      left: 36%;
      top: auto;
      bottom: auto;
      right: auto;
      p, b{
        width: 100%;
      }

    }

    button{
      font-size: 10px;
      color: #fff;
      background: #0075B1;
      border: 0px;
      border-radius: 5px;
      padding: 5px;
      margin-left: 90%;

      &:hover{
        background: #0040B1;
      }
    }
  }

`;
