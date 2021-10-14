import styled from 'styled-components';

export const Titulo = styled.div`
  margin-top: 25px;
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
margin: 30px 160px 0px 160px;
padding: 20px;
border:  1px solid #dedede;
border-radius: 4px;
display:flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;
max-height: 400px;
overflow: auto;

p{
  width: 100%;
}

.content{
  width: calc(100%/3);
  min-height: 350px;
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 5px;

  textarea{
    width: 90%;
    height: 145px;
    border-radius:4px;
    padding:5px;
    border: 2px solid #dedede;
    color: #828282;
    font-size: 15px;
    resize: none;
  }

  .table{
    background: #fff;
    max-height: 220px;
    width:80%;
    margin-left: 0px;
    border: 1px solid #dedede;

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
}


  .line{
    width: 90%;
    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    .download{
      width:100%;
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
  }
}

.position{
  width:100%;
    display:flex;
    justify-content: flex-end;

  }

  b{
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;
