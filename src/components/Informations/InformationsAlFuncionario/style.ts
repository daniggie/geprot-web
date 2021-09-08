import styled, { css } from "styled-components";

interface TableProps{
  overlay: boolean;
};

export const Contant = styled.div<TableProps>`

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

export const Overlay = styled.div<TableProps>`
      ${(props) =>
        props.overlay &&
        css`
          visibility: hidden;
        `}

      ${(props) =>
          !props.overlay &&
          css`
            visibility: visible;
          `}

      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.30);

      .overlay{
        position: absolute;
        width: 40%;
        height: 300px;
        border-radius: 10px;
        background: #fff;
        padding: 15px;
        display:flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        p{
          display:flex;
          justify-content: center;
          align-items: center;
          width: 95%;
          height: 30px;
        }

        img{
          width: 3%;
          height: 30px;
          cursor: pointer;
        }

        input{
          resize: none;
          padding: 10px;
          border-radius:5px;
          border: 1px solid #000;
          font-family: helvetica;
          font-size: 15px;
          width: 30%;
          height: 10px

          ;
        }
      }
`;
