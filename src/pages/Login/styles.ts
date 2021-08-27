import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-itens: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    width: 100%;

    form {
        width: 500px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        h1 {
            margin-bottom: 24px;
            color: #0091BD;
        }

        a {
            color: #0091BD;
            display: block;
            margin-top: 24px;
            text-decoration: none;

            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#0091BD')}
            }
        }
    }

    > a {
        color: #0091BD;
        display: block;
        margin-top: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: color 0.2s;

        svg {
            margin-right: 16px
        }

        &:hover {
            color: ${shade(0.2, '#0091BD')}
        }
    }
`;

export const Imagem = styled.img`
  width: 233px;
  height: 143px;
  margin: 60px 0px 50px 0px;
`;

export const Strip = styled.div`
  width: 100%;
  height: 55px;
  background-color: #0090C5;
  padding-left: 40px;
  padding-top: 17px;
  border-radius: 5px 5px 0px 0px;
  color: white;
  font-size: 20px;
`;

export const Triangle = styled.div`
  margin-left: 35px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 25px solid #0090C5;
  margin-bottom: 10px;
`;

export const ContInput = styled.div`
  width:80%;
  height:80px;
  top:50%;
  left:50%;
  margin-left:50px;
  margin-bottom: 35px;

  p{
    width:100%;
    height:30px;
    font-weight: bold;
    color: #0091BD;
  }

`;

export const ContPass = styled.div`
  width:80%;
  height:30px;
  top:50%;
  left:50%;
  margin-left:50px;
  margin-bottom: 35px;

  .forget{
    width:72%;
    height:40px;
    float: left;
    margin-right: 10px;
    color: #0091BD;
  }

`;
