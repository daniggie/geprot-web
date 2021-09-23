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
    display: flex;
    flex-wrap: nowrap;

    .arrow{
      width: 20%;
      margin-top: 180px;
      display: flex;
      justify-content: flex-start;

    #triangle_off {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #00579E;
        transition: 0.5s;
        display: block;
        z-index: 99;
        margin-left: 100%;
        transition: 0.8s;
    }

    #triangle_on {
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right:10px solid #0075B1;
          transition: 0.8s;
          display: none;
          z-index: 999;
          left: 0;
        }
      }


    .not_info{
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      padding-top: 5px;

      .icon_off{
        display: block;
        transition: 0.8s;
      }

      .icon_on{
        display: none;
        transition: 0.8s;
      }


    }

    &:hover{
      width: 10%;
      padding-left: 5px;

      #triangle_off{
        display: none;
      }

      #triangle_on{
        display: block;
      }

      .icon_off{
        display: none;
      }

      .icon_on{
        display: block;
      }

      .line{
        display: block;
        font-size: 12px;
        width: 100%;
      }

      .arrow{
        justify-content: flex-end;
      }
    }
  }
`;
