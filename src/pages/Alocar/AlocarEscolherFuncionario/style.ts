import styled from "styled-components";

export const Content = styled.div`
  width: 85%;
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 10px 60px 0px 60px;

  p{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px 0px 0px;
  }

  .header_filtros{
    width: 100%;
    margin-top: 20px;
    height: 20px;
    display:flex;
    flex-direction: row;
    align-items: center;

    b{
      width: 8%;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    hr{
      width: 95%;
      height: 2px;
      border-radius: 20px;
      border-width: 0px;
    }

  }

`;

export const All = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  flex-direction: row;
`;

export const PositionMenu = styled.div`
  width: 15%;
  margin-top: 90px;
  display:flex;
  justify-content: flex-end;
`;

export const Table = styled.div`
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    width: 100%;
    background: #EBEBEB;
    margin-top: 30px;

    p{
      width: 100%;
      display:flex;
      justify-content: flex-start;
      margin: 5px;
      align-items: center;
    }

    .informations{
      max-height: 250px;
      overflow: auto;
    }

    .header{
      display:flex;
      width: 98%;
      height: 40px;
      align-items: center;
      justify-content: center;
      background: #EBEBEB;
      border-bottom-style: solid;
      border-bottom-width: 0.5px;
      border-bottom-color: #DCDCDC;

      .title1{
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

      .title2{
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

    .contant_informations{
      max-height: 250px;
      overflow: auto;
    }
`;
