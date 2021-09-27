import styled, { css } from "styled-components";

interface TableProps{
  overlay: boolean;
};

export const ContainerAlert = styled.div<TableProps>`
  width: 95%;
  transition: 0.8s;

  .line{
    display: none;
    font-size: 12px;
    width: 100%;
    background: #dbdbdb;
    border-radius: 5px;
    padding: 2px;
    margin-top: 10px;
    transition: 0.8s;

    .text{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-height: 16px;
      margin-top: 5px;
      transition: 0.8s;

      &:hover{
        white-space: normal;
        overflow: visible;
        max-height: 80px;
        min-height: 40px;
        transition: 0.8s;
      }
    }

    .title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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

    .overlay{
      position: absolute;
      width: 100%;
      min-height: 70px;
      border-radius: 10px;
      background: #fff;
      padding: 10px;
      display:flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      z-index: 9999;
    }

    button{
      font-size: 10px;
      color: #fff;
      background: #0075B1;
      border: 0px;
      border-radius: 5px;
      padding: 5px;
      margin-left: 80%;
      transition: 0.5s;
      &:hover{
        background: #0040B1;
      }
    }
  }

`;

export const ContainerLido = styled.div<TableProps>`
  width: 95%;
  transition: 0.8s;

  .line{
    display: none;
    font-size: 12px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 2px;
    margin-top: 10px;
    transition: 0.8s;

    .text{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-height: 16px;
      margin-top: 5px;
      transition: 0.8s;

      &:hover{
        white-space: normal;
        overflow: visible;
        max-height: 80px;
        min-height: 40px;
        transition: 0.8s;
      }
    }

    .title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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

    .overlay{
      position: absolute;
      width: 100%;
      min-height: 70px;
      border-radius: 10px;
      background: #fff;
      padding: 10px;
      display:flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    button{
      font-size: 10px;
      color: #fff;
      background: #0075B1;
      border: 0px;
      border-radius: 5px;
      padding: 5px;
      margin-left: 80%;
      transition: 0.5s;
      &:hover{
        background: #0040B1;
      }
    }
  }

`;

