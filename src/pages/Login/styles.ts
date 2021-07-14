import styled from 'styled-components';

export const Imagem = styled.img`
  width: 233px;
  height: 143px;
  margin-left: 42%;
  margin-top: 60px;
`;

export const Container1 = styled.div`
  background-color: white;
  width:500px;
  height:400px;
  position: absolute;
  top:50%;
  left:50%;
  margin-top:-130px;
  margin-left:-250px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Barra1 = styled.div`
  width: 100%;
  height: 55px;
  background-color: #0090C5;
  padding-left: 40px;
  padding-top: 17px;
  border-radius: 5px 5px 0px 0px;
  color: white;
  font-size: 20px;
`;

export const Triangulo = styled.div`
  margin-left: 35px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 25px solid #0090C5;
  margin-bottom: 10px;
`;

export const Container2 = styled.div`
  width:80%;
  height:80px;
  top:50%;
  left:50%;
  margin-left:50px;
  margin-bottom: 35px;

  &:last-child {
    height:30px;
`;

export const Titulo = styled.div`
  width:100%;
  height:30px;
  font-weight: bold;
`;

export const CxTexto = styled.input`
  width:100%;
  height:50px;
  border-radius: 5px;
  border: 0.5px solid #BDBDBD;
  padding-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 17px;
  color:  #828282;
`;

export const CxTexto2 = styled.div`
  width:72%;
  height:40px;
  float: left;
  margin-right: 10px;
  color: #0091BD;
`;

export const BtnEntrar = styled.button`
  background-color: #0090C5;;
  width:25%;
  height:40px;
  float: left;
  border-radius: 5px;
  border: none;
  &:hover{
    background: #00579D;
  }
  a:hover {
    text-decoration:none;
   }
   a:link {
     text-decoration:none;
    }
    a:visited{
     text-decoration:none;
     }
`;

export const Icone = styled.div`
  background-color: #00579D;
  width:31%;
  height:40px;
  display: flex;
  border-radius: 5px 0px 0px 5px;
  padding-top: 10px;
  padding-left: 5px;
`;

export const Titulo2 = styled.div`
  background-color: #0090C5;
  width:100%;
  height:40px;
  display: flex;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  &:hover{
    background: #00579D;
  }
  p{
    margin-left: 2px;
    margin-top: 13px;
  }
`;


