import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  transition: 0.8s;

  .line{
    display: none;
    font-size: 12px;
    width: 100%;
    background: #cccccc;
    border-radius: 5px;
    padding: 2px;
    margin-top: 10px;
    transition: 0.8s;

    .a{
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

`;
