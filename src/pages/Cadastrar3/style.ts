import styled from 'styled-components';

export const Topo = styled.div`
width:100%;
height:150px;
display: block;
`;


export const Titulo = styled.div`
  height: 80px;
  width: 100%;
  margin:0px;

  h1{
    color:#00579d;
    font-size: 20px;
    line-height: 23.44px;
    padding-top: 40px;
    padding-left: 75px;
  };
`;

export const Formulario = styled.form`
height: 500px;
width: 90%;
margin: 0px auto;
border:  1px solid #dedede;
h1{
  color:#0091BD;
  font-size: 18px;
  line-height: 21.09px;
  padding-top: 40px;
  padding-left: 75px;
}
`;

export const Caixa = styled.div`
height: 360px;
width: 87%;
margin: 15px auto;
`;


export const Baixo = styled.div`
width: 98%;
margin: 20px auto;
height: 80px;
`;



export const Irmaos = styled.div`
height: 150px;
width: 45%;
float:left;
:last-child{
  float:right;
}
`;

export const LadoE =styled.div`
height: 80px;
margin-left:10px;
width: 45%;
float:left;
margin-top:2px;

input{
  margin-top:10px;
  width: 205px;
  height: 40px;
  background: #ffffff;
  box-shadow: inset 2px 4px 3px rgba(0,0,0,0.25);
  border-radius:5px;
  border: 1px;
  padding-left:4px;
}
`;

export const LadoD =styled.div`
height: 80px;
margin-right:10px;
width: 45%;
float: right;
margin-top:2px;

input{
  margin-top:10px;
  width: 205px;
  height: 40px;
  background: #ffffff;
  box-shadow: inset 2px 4px 3px rgba(0,0,0,0.25);
  border-radius:5px;
  border: 1px;
  padding-left:4px;
}
`;
export const Escrita =styled.p`
font-size:18px;
line-height: 21px;
align-items: center;
color:#0091bd;
margin:2px;
font-family: Roboto;
font-style:normal;
font-weight: bold;
`;

export const Segura =styled.div`
margin-top:25px;
height:95px;
`;

export const Linha = styled.div`
width:98%;
margin:90px auto;
height:80px;
margin-top: 20px;
input{
  margin-top:10px;
  width: 98%;
  height: 40px;
  background: #ffffff;
  box-shadow: inset 2px 4px 3px rgba(0,0,0,0.25);
  border-radius:5px;
  border: 1px;
  padding-left:4px;
}
`;

export const TituloBaixo = styled.h2`
    color: #0091BD;
    font-size: 18px;
    line-height: 21.09px;
    padding-top: 20px;
    padding-left: 0px;
`;