import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  select, input{
    width: 100%;
    border-radius:5px;
    border: 1px;
    padding: 5px;
    border: 1px solid #dedede;
  }

  .cols{
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-around;

    .cols1{
      width: 8%;
      height: 40px;
      display: flex;
      align-items: center;
    }

    .cols2{
      width: 15%;
      height: 40px;
      display: flex;
      align-items: center;
    }

    .colsicon{
      width: 5%;
      height: 40px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

  }

`;
