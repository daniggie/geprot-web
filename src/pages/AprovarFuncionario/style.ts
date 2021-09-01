import styled from "styled-components";

export const All = styled.div`

  display: flex;
  margin: 25px;
  flex-wrap: wrap;
  justify-content: center;

  p{
    width: 100%;
    display:flex;
    justify-content: flex-start;
    margin: 5px;
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
`;
