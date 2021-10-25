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
`;

export const Container=styled.div`
  width: 74%;
  max-height: 400px;
  padding: 25px;
  margin: 0 85px 0 120px;

  border: 0.5px;
  border-style: solid;
  border-color: #c4c4c4;
  border-radius: 4px;

  overflow: auto;

  .boxAdd{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin: -19px 0px 0px 210px;
    padding: 2px;
    cursor: pointer;

    &:hover{
      background: #008EA5;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  .boxEx{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
    margin: 0px 0px 0px 0px;

    &:hover{
      background: #008EA5;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  form{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;

    .column{
      width: 48%;
      height: 550px;
      align-items: center;
      align-content: space-around;
      justify-content: space-around;

      .table{
        background: #fff;
        height: 200px;
        border: 1px solid #dedede;
        border-radius: 3px;
        margin-bottom: 20px;
        overflow: auto;
      
        .header{
          display:flex;
          width: 100%;
          height: 50px;
          align-items: center;
          background: #EBEBEB;
          border-bottom-style: solid;
          border-bottom-width: 0.5px;
          border-bottom-color: #DCDCDC;
      
          .title1{
            width:50%;
            height: 50px;
            display:flex;
            justify-content: center;
            border-right-style: solid;
            border-right-width: 0.5px;
            border-right-color: #DCDCDC;
            align-items: center;
          }
      
          .title2{
            width:28%;
            height: 50px;
            display:flex;
            justify-content: center;
            align-items: center;
          }
      
          .title3{
            width:22%;
            height: 50px;
            display:flex;
            justify-content: center;
            align-items: center;
            border-right-style: solid;
            border-right-width: 0.5px;
            border-right-color: #DCDCDC;
          }
      
      
        }
      
        .columns{
          width:100%;
          display: flex;
          background: #fff;
      
          .column1{
            width: 50%;
            height: 30px;
            display:flex;
            justify-content: center;
            align-items: center;
            border-bottom-style: solid;
            border-bottom-width: 0.5px;
            border-bottom-color: #DCDCDC;
          }
      
          .column2{
            height: 30px;
            width: 30%;
            display:flex;
            justify-content: center;
            align-items: center;
      
            border-bottom-style: solid;
            border-bottom-width: 0.5px;
            border-bottom-color: #DCDCDC;
          }
      
          .column3{
            height: 30px;
            width: 20%;
            display:flex;
            justify-content: center;
            align-items: center;
      
            border-bottom-style: solid;
            border-bottom-width: 0.5px;
            border-bottom-color: #DCDCDC;
          }
        }
      }

      .line{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: flex-start;

        .download{
          width: 70%;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 4px;
          padding:5px 10px;
          cursor: pointer;

          p{
            margin: 11px 0px 8px 0px;
          }
    
          &:hover{
            opacity: 0.7;
            transition: 0.2s;
    
          }
        }

        .float{
          width: 50%;
        }

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

        p{
          display: flex;
          width: 80%;
          justify-content: start;
          margin-bottom: 5px;
        }
      }
    }
  }
}
`;