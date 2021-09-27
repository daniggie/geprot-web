import styled, {css} from 'styled-components';


export const Titulo = styled.div`
  margin-top: 40px;
  margin-left: 160px;
`;

export const Formulario = styled.form`
margin: 30px 160px 0px 160px;
padding: 20px;
border: 1px solid #dedede;
border-radius: 4px;
max-height: 450px;
overflow: auto;

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
  height: 350px;
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  .lineText{
    width: 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    &:last-child{
      margin-right:65px
    }
  }

  .line{
    width: 100%;
    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    b{
      width: 45%;
    }

    .tamanho{
      width:40%;
    }

    .tamanhoDate{
      width:45%;
    }

    input{
      width: 100%;
      border-radius:5px;
      border: 1px;
      padding:10px;
      border: 1px solid #dedede;
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
  }
}

.table{
  background: #fff;
  height: 225px;
  border:  1px solid #dedede;
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

      .box{
        width: 20px;
        height: 20px;
        border-radius: 5px;
        margin: 10px 10px 10px 10px;
        padding: 2px;

        &:hover{
          background: #008EA5;
          transition: 0.2s;
          cursor: pointer;
        }
      }
    }
  }
}

.position{
  width:100%;
  display:flex;
  justify-content: flex-end;

  .button{
    width: 205px;
    background: #00579D;
    border-radius: 5px;
    border:0px;
    float:right;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

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
`;

export const Form = styled.form`
  width: 45%;
  height: 350px;
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  .lineText{
    width: 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    &:last-child{
      margin-right:65px
    }
  }

  .line{
    width: 100%;
    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    b{
      width: 45%;
    }

    .tamanho{
      width:40%;
    }

    .tamanhoDate{
      width:45%;
    }

    input{
      width: 100%;
      border-radius:5px;
      border: 1px;
      padding:10px;
      border: 1px solid #dedede;
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
  }
`;
