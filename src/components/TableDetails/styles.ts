import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  width: 100%;
  display flex;

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
