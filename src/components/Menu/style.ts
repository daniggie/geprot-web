import styled from "styled-components";

export const Container = styled.div`
  width: 15%;
  height: 400px;
  display:flex;
  justify-content: flex-end;
  align-items: center;

  .grid1{
    background: #00579D;
  }

  .grid2{
    background: #0075B1;
  }

  .grid3{
    background: #2382BA;
  }

  .grid4{
    background: #0090C5;
  }

  .grid5{
    background: #0091BD;
  }


  #menu{
    width: 200px;
    height: 275px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-end;
    position: fixed;

    .content_atalho{
      width: 50px;
      height: 60px;
      display: flex;
      margin-top: 2px;

      #idparagrafo{
        display:none;
        margin-top: 10px;
        margin-left: 10px;

        font-family: Arial, Helvetica, sans-serif;
        font-style: normal;
        font-size: 15px;
        color: white;

      }

      .atalho{
        width: 50px;
        margin-top: 2px;
        padding: 5px;
        display:flex;

        svg{
          margin: 2px 0px 0px 5px;
        }

      }

      &:hover{
        width:185px;
        transition: 0.8s;

        #idparagrafo{
          display:block;
          margin-top: 10px;

          font-family: Arial, Helvetica, sans-serif;
          font-style: normal;
          font-size: 15px;
          color: white;
          transition: 0.8s;
        }
      }

    }

    #border1{
      border-radius: 5px 0px 0px 0px;
    }

    #border2{
      border-radius: 0px 0px 0px 5px;
    }

  }
`;
