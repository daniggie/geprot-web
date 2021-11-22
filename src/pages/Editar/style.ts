import styled from 'styled-components';

export const Titulo = styled.div`
  margin-top: 40px;
  margin-left: 160px;
`;

export const Formulario = styled.form`
margin: 40px 160px 20px 160px;
padding: 30px;
border: 1px solid #dedede;
border-radius: 3px;

overflow: scroll;
max-height: 450px;
display:flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;

p{
  width: 100%;
}

.content{
  width: 45%;
  min-height: 350px;
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;


  .line{
    width: 100%;
    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    .float{
      width: 45%;
    }

    .floatBox{
      width: 45%;
      display: flex;
      align-items: center;
    }

    b{
      width: 45%;
    }

    .tamanho{
      width:45%;
    }

    .box{
      width: 100%;
      textarea{
        resize: none;
        padding: 10px;
        border-radius:5px;
        border: 1px solid #dedede;
        font-family: helvetica;
        min-width: 100%;
        min-height: 150px;
      }
    }

    input{
      width: 100%;
      border-radius:5px;
      border: 1px;
      padding:10px;
      border: 1px solid #dedede;
    }
  }

  .boxAdd{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
    margin-left: 5px;

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

  .contentTable{

    width: 100%;
    max-height: 180px;
    display: flex;
    justify-content: center;
    margin: 10px 0px 15px 0px;
    
    .table{
        width: 90%;
        background: #fff;
        height: 161px;
        border: 1px solid #dedede;
        border-radius: 3px;
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
  }

  
}

.position{
  width:100%;
    display:flex;
    justify-content: space-between;
  }
`;
