import styled from "styled-components";
import { shade } from "polished";

export const Container=styled.div`
  width:10%;
  height: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  button{
    display:flex;
    justify-content: center;
    padding: 3px 10px 3px 10px;
    border: 0px;
    border-radius: 5px;
    background: #30a130;
    transition: 0.2s;
    &:hover{
      background: ${shade(0.2, "#30a130")};
    }
  }
`;
