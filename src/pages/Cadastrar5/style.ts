import styled, { css } from 'styled-components';

interface TableProps{
  cardColumn: boolean;
};

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

export const Formulario = styled.form<TableProps>`
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

.table{
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  background: #fff;
  height: 200px;
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
      width:30%;
      height: 50px;
      display:flex;
      justify-content: center;
      align-items: center;
    }

    .title3{
      width:20%;
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
    ${(props) =>
      props.cardColumn &&
      css`
        visibility: visible;
      `}

    ${(props) =>
        !props.cardColumn &&
        css`
          visibility: hidden;
        `}


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

.content{
  width: 45%;
  min-height: 250px;
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

.box{
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  padding: 2px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);


  &:hover{
    background: #008EA5;
    transition: 0.2s;
  }
}
.position{
  width:100%;
    display:flex;
    justify-content: flex-end;
  }
`;
