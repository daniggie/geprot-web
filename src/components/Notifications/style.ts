import styled from "styled-components";

export const Container = styled.div`
.not{
    width: 3%;
    height: 400px;
    background: #fff;
    position: fixed;
    border-radius: 0px 5px 5px 0px;
    border: solid 1px #0075B1;
    transition: 0.5s;
    z-index: 1;

    #t {
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid #0075B1;
        transition: 0.5s;
        display: block;
        z-index: 99;
        margin-top: 2px;
        margin-left: 100%;
        transition: 0.8s;
    }

    #t2 {
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right:15px solid #0075B1;
          margin-left: 86%;
          transition: 0.8s;
          display: none;
          z-index: 999;
          left: 0;
        }
    &:hover{
      width: 8%;
      padding-left: 5px;

      #t{
        display: none;
      }

      #t2{
        display: block;
      }
    }
  }
`;
