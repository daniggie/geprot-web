import styled from "styled-components";

export const Container = styled.div`
  width: 95%;

  .line{
    display: none;
    font-size: 12px;
    width: 100%;
    background: #cccccc;
    border-radius: 5px;
    padding: 2px;
    margin-top: 10px;

    .a{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: 0.8s;
      max-height: 16px;
      margin-top: 5px;

      &:hover{
        white-space: normal;
        overflow: visible;
        max-height: 80px;
        min-height: 40px;
      }
    }

    .title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

`;
