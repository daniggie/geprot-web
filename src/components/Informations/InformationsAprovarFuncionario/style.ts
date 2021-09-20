import styled from "styled-components";

export const Content = styled.div`
    max-height: 300px;

    .columns{
      display:flex;
      width: 100%;
      height: 50px;
      align-items: center;
      background: #fff;
      border-bottom-style: solid;
      border-bottom-width: 0.5px;
      border-bottom-color: #DCDCDC;
      transition: 0.5s;

      .desc1{
        white-space: wrap;
        white-space: nowrap;
        overflow: hidden;
        visibility: visible;
        text-overflow: ellipsis;
        width: 100%;
        height: 20px;
        transition: 0.5s;
      }

      .desc2 {
        display: none;
        z-index: 50;
        transition: 0.5s;
      }

      &:hover{
        height: 150px;

        .desc1{
          visibility: hidden;
          display: none;
        }

        .desc2{
          overflow: unset;
          display: block;
          visibility: visible;
        }
      }

      .column{

        width:25%;
        height: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;

        p{
          justify-content: center;
        }

      }

      .column2{

      width:50%;
      height: 50px;
      display:flex;
      justify-content: center;
      align-items: center;

        p{
          justify-content: start;
        }



      }

    }

`;
