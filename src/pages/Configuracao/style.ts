import styled, {css} from "styled-components";

export const All= styled.div`
    width: 100%;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-top: 90px;
    flex-direction: row;
`;

export const Content= styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: -30px 0px 0px 0px;

  .config{
    width: 85%;
    border: 0.5px;
    border-style: solid;
    border-color: #c4c4c4;
    max-height:450px;
    overflow: auto;
    border-radius: 4px;

    .line_div{
      width:95%;
      height: 1px;
      background-color: #00579D;
      margin-left: 20px;
      border-radius: 3px;
    }

    .line{
      width:95%;
      height: 50px;
      display: flex;
      align-items: center;
      margin: 20px;
    }

    .cont_setings{
      width:95%;
      margin:10px 0px 10px 20px;

      h1{
        font-weight: 550;
        margin:10px 10px 10px 0px;
      }

      h3{
        color: #828282;
        font-weight: 545;
        margin:10px 10px 10px 0px;
      }

      .line_option{
        display: flex;
        justify-content: space-between;


        .login_eye{
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: 15px;
          margin-left: -610px;
          margin-right: 15px;
        }
      }

      input{
        width: 20%;
        height: 35px;
        border-radius:5px;
        border: 1px;
        padding:10px;
        margin-top: 5px;
        border: 1px solid #dedede;
        color: #828282;
      }

      button{
        width: 10%;
        height: 35px;
        border-radius:5px;
        border: 1px;
        padding:10px;
        border: none;
        background-color: #00579D;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .switch_font{
        height: 35px;
        box-sizing: border-box;
        width: 110px;
        display:flex;
        justify-content: space-between;
        background-color:#00579D;
        border-radius: 3px;
        color: #fff;
        z-index:1000;
        margin-top:10px;

        a {
          text-decoration: none;
          color: #fff;
        }

        .lang-menu {
          width: 120px;
          text-align: right;
          font-weight: 540;
          position: relative;
        }

        .selected-lang {
          height: 30px;
          display: flex;
          justify-content: center;
          line-height: 1.7;
          cursor: pointer;
          align-items: center;
        }

        .lang-menu ul {
          margin: 0;
          padding: 0;
          display: none;
          background-color: #00579D;
          border: none;
          position: absolute;
          top: 37px;
          left: 0px;
          width: 110px;
          border-radius: 3px;
          box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
        }


        .lang-menu ul li {
          list-style: none;
          text-align: left;
          display: flex;
          justify-content: space-between;
        }

        .lang-menu ul li a {
          text-decoration: none;
          width: 110px;
          padding: 5px 10px;
          display: block;
        }

        .lang-menu ul li:hover {
          background-color: rgba(0,0,0,0.2);
        }

        .lang-menu:hover ul {
          display: block;
        }
      }
    }
  }

  .position{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px;

      .but{
      width: 205px;
      background: #0091BD;
      border-radius: 5px;
      border:0px;
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;

      &:hover{
        background: #0078bd;
        transition: 0.4s;
      }
      h1{
        font-size:20px;
        color:#fff;
        display:flex;
        justify-content: center;
        font-weight: normal;
      }
    }
  }
`;


