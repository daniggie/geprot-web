import styled from "styled-components";

export const All = styled.div`

  display: flex;
  margin: 50px;
  flex-wrap: wrap;
  justify-content: center;

  b{
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
  }

  .table{
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    width: 80%;
    background: #EBEBEB;

    .content_informations{
      max-height: 300px;
      overflow: auto;
    }

    .header{
      display:flex;
      width: 100%;
      height: 50px;
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

  }
`;
