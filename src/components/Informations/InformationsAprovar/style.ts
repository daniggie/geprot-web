import styled from "styled-components";


export const Content = styled.div`
    max-height: 300px;
    overflow: auto;

    .columns{
        display:flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #DCDCDC;

        .column1{

          width:10%;
          height: 50px;
          display:flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;

          p{
            display:flex;
            justify-content: center;
          }

          .line{
            width: 1%;
            height: 50%;
            border-radius: 20px;
          }

          b{
            width: calc(100%/3);
            justify-content: center;
          }

          }

        .column2{
          width: 23%;
          height: 50px;
          display:flex;
          justify-content: center;
          align-items: center;

          p{
            display:flex;
            justify-content: flex-start;
          }
        }
      }

`;
