import styled, { css } from "styled-components";

interface TableProps{
  overlay: boolean;
};

export const All = styled.div<TableProps>`

  display: flex;
  margin: 25px;
  flex-wrap: wrap;
  justify-content: center;

  p{
    width: 100%;
    display:flex;
    justify-content: flex-start;
    margin: 3px;
    align-items: center;
  }

  .table{
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    width: 80%;
    background: #EBEBEB;

    .informations{
      max-height: 250px;
      overflow: auto;
    }

    .header{
      display:flex;
      width: 98%;
      height: 50px;
      align-items: center;
      justify-content: center;
      background: #EBEBEB;
      border-bottom-style: solid;
      border-bottom-width: 0.5px;
      border-bottom-color: #DCDCDC;

      .title{
        width:20%;
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

      .title2{
        width:50%;
        height: 50px;
        display:flex;
        align-items: center;
        justify-content: space-between;

        p{
          width: 60%;
          display:flex;
          justify-content:  space-around;
        }

        b{
          width: 40%;
          display:flex;
          justify-content: flex-start;
        }
      }

    }

  }

  .position{
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;

    p{
      justify-content: center;
    }
  }

  #recusado{

    ${(props) =>
      props.overlay &&
      css`
        visibility: hidden;
        opacity: 0;
      `}

    ${(props) =>
        !props.overlay &&
        css`
          visibility: visible;
          opacity: 1;
        `}

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.30);
    transition: 0.5s;

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

      textarea{
        resize: none;
        padding: 10px;
        border-radius:5px;
        border: 1px solid #000;
        font-family: helvetica;
        font-size: 15px;
        min-width: 100%;
        min-height: 150px;
      }
    }
  }

  .botaorecuse{
    width: 205px;
    background: #fff;
    border:  1px solid #dedede;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    &:hover{
      background: #dedede;
      transition: 0.4s;
    }
    p{
      font-size:20px;
      display:flex;
      justify-content: center;
    }
  }
`;
