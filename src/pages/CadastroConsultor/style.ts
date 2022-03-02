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
  padding: 130px 35px 35px 15px;
  max-height: 400px;
  overflow: auto;

  .column{
    width: 50%;
    height: 350px;
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

    .lineSkills{
      width: 100%;
      height: 265px;
      margin-bottom: 20px;

      p{
        display: flex;
        width: 90%;
        justify-content: start;
        margin-bottom: 5px;
      }

      .columns{
        width: 93%;
        height:230px;
        border-radius:3px;
        border:  1px solid #dedede;
        overflow: auto;
        color: #828282;

        .column1{
          width: 100%;
          height: 30px;
          display:flex;
          color: #00579D;
          justify-content: flex-start;
          align-items: center;
          border-bottom-style: solid;
          border-bottom-width: 0.5px;
          border-bottom-color: #DCDCDC;

          input[type=checkbox] {
            margin: 0px 20px 8px 15px;
            position: relative;
            cursor: pointer;
          }

          input[type=checkbox]:before {
            content: "";
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 2px;
            top: 0;
            left: 0;
            background-color: #DCDCDC;
          }

          input[type=checkbox]:checked:after {
            content: "";
            display: block;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 2px;
            left: 6px;
          }
          span{
            margin: 0px 15px;
          }
        }
      }
    }
  }

  .position{
    width:100%;
    display:flex;
    justify-content: space-between;
    padding: 30px 40px 0px 10px;
  }
}
`;