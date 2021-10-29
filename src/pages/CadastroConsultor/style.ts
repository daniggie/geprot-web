import styled, {css} from 'styled-components';

export const All= styled.div`
    width: 100%;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-top: 50px;
    flex-direction: row;
`;

export const Container= styled.div`
width: 90%;

.title{
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  align-content: space-around;
  margin-bottom: 15px;

  b{
    margin: 5px 0px 0px 120px;
    }
  }

  form{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container_square{
    width: 80%;
    border: 0.5px;
    border-style: solid;
    border-color: #c4c4c4;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    border-radius: 4px;
    padding: 35px;

    .column{
      width: 50%;
      height: 290px;
      align-items: center;
      align-content: space-between;
      justify-content: space-around;
      padding: 0px 10px 0px 10px;

      .line{
        width: 100%;
        height: 75px;
        margin-bottom: 20px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: flex-start;

        p{
          display: flex;
          width: 90%;
          justify-content: start;
          margin-bottom: 5px;
        }

        .login_eye{
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: -32px;
          margin-left: 355px;
        }
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
    background: #00579D;
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