import styled from "styled-components";

export const All= styled.div`
    width: 100%;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-top: 90px;
    flex-direction: row;
`;

export const Content= styled.div`
  width: 85%;
  display: flex;
  justify-content: center;

  .config{
    width: 85%;
    border: 0.5px;
    border-style: solid;
    border-color: #c4c4c4;
    display: flex;

    .line{
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;

      p{
        margin-left: 25px;
      }
    }

  }
`;
