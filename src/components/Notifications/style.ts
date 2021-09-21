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

    .arrow{
      width: 1.5%;

    #triangle_off {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #0075B1;
        transition: 0.5s;
        display: block;
        z-index: 99;
        margin-top: 180px;
        margin-left: 100%;
        transition: 0.8s;
    }

    #triangle_on {
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right:10px solid #0075B1;
          margin-left: 90%;
          margin-top: 180px;
          transition: 0.8s;
          display: none;
          z-index: 999;
          left: 0;
        }
      }
    &:hover{
      width: 8%;
      padding-left: 5px;

      #triangle_off{
        display: none;
      }

      #triangle_on{
        display: block;
      }
    }

    .not_info{
      width: ;
      margin-top: 0px;
    }


  }
`;
