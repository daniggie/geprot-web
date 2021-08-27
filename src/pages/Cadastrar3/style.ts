import styled from 'styled-components';

export const Titulo = styled.div`
  margin-top: 30px;
  margin-left: 30px;
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
margin: 20px;
padding: 60px;
border:  1px solid #dedede;

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
  height: 110px;
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
    justify-content: space-between;
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
