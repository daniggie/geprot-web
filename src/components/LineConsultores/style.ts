import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  display: flex;
  background: #fff;
  color: #828282;

  .column1{
    width: 60%;
    height: 30px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    border-bottom-color: #DCDCDC;
    }

    .column2{
      height: 30px;
      width: 40%;
      display:flex;
      justify-content: center;
      align-items: center;

    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    border-bottom-color: #DCDCDC;
  }
}

`;
