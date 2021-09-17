import styled, {css} from 'styled-components';

export const All= styled.div`
    width: 100%;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-top: 90px;
    flex-direction: row;
`;

export const Container= styled.div`
  width: 85%;
  display: flex;
  justify-content: center;

  .container_square{
    width: 85%;
    border: 0.5px;
    border-style: solid;
    border-color: #c4c4c4;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;

    .title{
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      align-content: space-around;

      b{
        margin: 10px;
      }
    }

    .line{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      align-content: space-around;
      justify-content: space-around;

      input{
      width: 25%;
      border-radius:5px;
      border: 1px;
      padding:10px;
      border: 1px solid #dedede;
    }

      p{
        display: flex;
        width: 15%;
        justify-content: start;
      }
    }

  }

  .position{
  width:100%;
  display:flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;

  button{
    width: 205px;
    background: #0091BD;
    border-radius: 5px;
    border:0px;
    float:right;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #fff;

    &:hover{
      background: #0078bd;
      transition: 0.4s;
    }

    p{
      font-size:20px;
      color:#fff;
      display:flex;
      justify-content: center;
      font-style:normal;
    }
  }
}
`;

