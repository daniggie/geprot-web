import styled from 'styled-components';

export const Titulo = styled.div`
  margin-top: 35px;
  margin-left: 160px;
  display:flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;

  b{
    margin-left: 5px;
  }
`;

export const Formulario = styled.form`
margin: 40px 120px 20px 120px;
padding: 10px;
border:  1px solid #dedede;
border-radius: 3px;
padding: 50px;
display:flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;

p{
  width: 100%;
}

.content{
  width: calc(100%/3);
  min-height: 350px;
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin-bottom: 5px;

  .borderstyle{
    width: 90%;
    border: 3px solid rgba(0, 0, 0, 0.1);
    padding: 5px;

  }


.table{
  background: #fff;
  min-height: 295px;
  width:80%;
  margin-left: 0px;
  border:  1px solid #dedede;


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
      width:60%;
      height: 50px;
      display:flex;
      justify-content: center;
      border-right-style: solid;
      border-right-width: 0.5px;
      border-right-color: #DCDCDC;
      align-items: center;
    }

    .title2{
      width:40%;
      height: 50px;
      display:flex;
      justify-content: center;
      align-items: center;
    }

  }

  .columns{
    width:100%;
    display: flex;
    background: #fff;

    .column1{
      width: 60%;
      height: 30px;
      display:flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom-style: solid;
      border-bottom-width: 0.5px;
      border-bottom-color: #DCDCDC;


      }

    .column2{
      height: 30px;
      width: 40%;
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
    width: 90%;
    display flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    .download{
      width:90%;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px 0px 10px;
      margin: 5px;
      cursor: pointer;

      &:hover{
        opacity: 0.7;
        transition: 0.2s;

      }
    }

    .tamanho{
      width:50%;
    }

    .tamanho2{
      display:flex;
      justify-content: space-between;

      b{
        margin: 4px;
      }
    }

    input{
      width: 100%;
      box-shadow: inset 2px 4px 3px rgba(0,0,0,0.25);
      border-radius:5px;
      border: 1px;
      padding:10px;
    }
  }
}

.position{
  width:100%;
    display:flex;
    justify-content: flex-end;

  }

  input{
    width: 100%;
    box-shadow: inset 2px 4px 3px rgba(0,0,0,0.25);
    border-radius:5px;
    border: 1px;
    padding:10px;
    margin-bottom:15px;
  }

  b{
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;
