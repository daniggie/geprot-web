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
    display flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

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
        autocapitalize: sentences;
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
}

.position{
  width:100%;
    display:flex;
    justify-content: space-between;
  }
`;
