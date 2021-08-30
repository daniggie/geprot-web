import styled from 'styled-components';

export const Titulo = styled.div`
  margin-top: 40px;
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
margin: 40px 160px 20px 160px;
padding: 60px;
border:  1px solid #dedede;
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
      border: 1px solid #dedede;
      border-radius:5px;
      padding: 10px;
    }
  }
}

.position{
  width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
`;
