import styled, {css} from 'styled-components';

export const All= styled.div`
  width: 100%;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
  flex-direction: row;

  .title{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    align-content: space-around;
    margin-bottom: 15px;
    margin-left: 120px;
  }

  form{
    width: 70%;
    max-height: 400px;
    padding: 15px;
    margin: 0 153px 0 120px;

    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;

    border: 0.5px;
    border-style: solid;
    border-color: #c4c4c4;
    border-radius: 4px;

    overflow: auto;

    .column{
      width: 48%;
      height: 500px;
      align-items: center;
      align-content: space-around;
      justify-content: space-around;

      .line{
        width: 100%;
        height: 80px;
        margin-bottom: 15px;

        textarea{
          width: 90%;
          height: 145px;
          border-radius:4px;
          padding:5px;
          border: 2px solid #dedede;
          color: #828282;
          font-size: 15px;
          resize: none;
        }

        .box{
          width: 20px;
          height: 20px;
          border-radius: 5px;
          margin: 10px 10px 10px 10px;
          padding: 2px;
          cursor: pointer;
    
          &:hover{
            background: #008EA5;
            transition: 0.2s;
            cursor: pointer;
          }
        }

        p{
          display: flex;
          width: 80%;
          justify-content: start;
          margin-bottom: 5px;
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
  }
}
`;