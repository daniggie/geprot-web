import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0.5px;
  border-color: #c4c4c4;
  border-style: solid;

  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  .table{
    width: calc(100%/3);
    padding: 10px;

    display:flex;
    justify-content: center;
  }
`;
