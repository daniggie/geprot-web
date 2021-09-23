import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .line{
    display: none;
    font-size: 12px;
    width: 100%;
    background: #dedede;
    padding: 2px;
    border-radius: 5px;

    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: wrap;

      transition: 0.8s;
      max-height: 16px;

      &:hover{
        height: 50px;
        overflow: visible;
        max-height: 50px;
      }
    }

    b{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.8s;
    }


  }

`;
