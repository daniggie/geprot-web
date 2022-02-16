import styled, {css} from 'styled-components';

interface TableProps{
  popup: boolean;
};

export const Titulo = styled.div`
  margin-top: 40px;
  margin-left: 160px;
`;

export const Formulario = styled.form<TableProps>`
margin: 40px 160px 20px 160px;
padding: 30px;
border: 1px solid #dedede;
border-radius: 3px;
max-height: 450px;
display:flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;

p{
  width: 100%;
}

.popup{

  ${(props) =>
    props.popup &&
    css`
    visibility: hidden;
    opacity:0;
  `}

  ${(props) =>
    !props.popup &&
    css`
    visibility: visible;
    opacity: 1;
  `}

  position: fixed;
  top: 0; 
  bottom: 0; 
  left: 0; 
  right:0;
  margin: auto;
  width: 400px;
  height: 280px;
  background: white;
  border-radius: 3px;
  box-shadow:0px 4px 4px rgb(0 0 0 / 25%);

  #barra{
    background-color: #00579D;
    width: 100%;
    height: 35px;
    border-radius: 3px 3px 0px 0px;
    cursor: pointer;
  }
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
    max-height: 240px;
    display: flex;
    justify-content: center;
    margin-top: 5px;

    .table{
        width: 100%;
        background: #fff;
        height: 232px;
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
            width:40%;
            height: 50px;
            display:flex;
            justify-content: center;
            border-right-style: solid;
            border-right-width: 0.5px;
            border-right-color: #DCDCDC;
            align-items: center;
          }
      
          .title2{
            width:20%;
            height: 50px;
            display:flex;
            justify-content: center;
            align-items: center;
          }
      
          .title3{
            width:50%;
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


    .botaoSalvar {
      width: 205px;
      background: #00579D;
      border-radius: 5px;

      display:flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      
      cursor: pointer;

      &:hover{
        background: #0078bd;
        transition: 0.2s;
      }

      p{
        font-size:20px;
        color:#fff;
        display:flex;
        justify-content: center;
      }
    }
  }
`;
