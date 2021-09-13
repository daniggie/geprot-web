import styled from "styled-components";

export const All = styled.div`
    margin: 10px;
    padding: 30px;


    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Content = styled.div`
  width: 49%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  .lineobj{
      padding: 10px;
      width: 100%;
      min-height: 140px;
      display: flex;
      margin: 4px 0px 4px 0px;

      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;

      border-width: 1px;
      border-style: solid;
      border-color: #c4c4c4;
    }

  .line{
      padding: 5px;
      width: 100%;
      display: flex;

      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

      p{
        display: flex;
      }

      b{
        width: calc(100%/3);
        font-weight: normal;
        display: flex;
      }

      .p1{
        justify-content: start;
      }

      .p2{
        justify-content: end;
      }

      .p3{
        justify-content: center;
      }



      .download{
        width: 200px;
        height: 100%;
        border-radius: 5px;
        padding: 5px;
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
          background-color: #0081BD;
          transition: 0.4s;
        }
      }
    }

  .linelabel{
    padding: 5px;
    width: 100%;
    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

      #labelOverlay {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 90px;
        height: 45px;
        text-align: center;
        cursor: default;
      }

      #labelOverlay p {
        line-height: 0.3;
        padding:0;
        margin: 10px;
      }

      #labelOverlay p.used-size {
        line-height: 0.5;
        font-size: 20pt;
        color: #8e8e8e;
      }

      #labelOverlay p.total-size {
        line-height: 0.5;
        font-size: 12pt;
        color: #cdcdcd;
      }
    }

    .table_header{

      .table{
        width: calc(100%/3);
        padding: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: #b1b1b1;
        background: #f1f1f1;

        display:flex;
        justify-content: center;
      }

      padding: 5px;
      width: 100%;
      display: flex;

      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
    }

    .contDetails{
      height: 125px;
      width: 98%;
      margin: 0px 0px 15px 6px;
      overflow: auto;
      border: 1px solid #dedede;
      border-radius: 3px;
    }
`;

export const BttnPosition = styled.div`

    width: 100%;
    display:flex;
    justify-content: flex-end;
    margin-right: 30px;

`;
