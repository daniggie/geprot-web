import styled from "styled-components";

export const All = styled.div`
    margin: 10px;
    padding: 40px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Content = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  .line{
      padding: 5px;
      width: 100%;
      display flex;

      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

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

      .grafico{
          height: 150px;
          width: 150px;
          border-radius: 100px;

          background: blue;
          margin: auto;
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
        display flex;

        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .table_content{
        .table{
            width: calc(100%/3);
            padding: 10px;

            display:flex;
            justify-content: center;
        }

        padding: 5px;
        width: 100%;
        display flex;

        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
    }

`;

export const BttnPosition = styled.div`

    width: 100%;
    display:flex;
    justify-content: flex-end;
    margin-right: 30px;

`;
