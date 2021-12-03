import styled from "styled-components";

//Revisado 03/12/2021
//Necessidade de refatoração aprofundada

export const Container = styled.div`
    width: 25%;
    display:flex;
    align-items: center;

    .arrow{
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;

export const ContFilter = styled.div`
  height: 25px;
  box-sizing: border-box;
  width: 140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #00579D;
  border-radius: 3px;
  color: #fff;
  z-index:100;
  margin-left: 5px;

  a {
    text-decoration: none;
    color: #fff;
  }

  .lang-menu {
      text-align: right;
      font-weight: 500;
      position: relative;
      
    .selected-lang {
      display: flex;
      justify-content: space-between;
      line-height: 1.7;
      cursor: pointer;
      padding-left: 10px;
    }
    
    ul {
      margin: 0;
      padding: 0;
      display: none;
      background-color: #00579D;
      border: none;
      position: absolute;
      top: 27px;
      left: 0px;
      width: 150px;
      border-radius: 3px;
      box-shadow: 0px 1px 10px rgba(0,0,0,0.2);

        li {
        list-style: none;
        text-align: left;
        display: flex;
        justify-content: space-between;

        a {
            text-decoration: none;
            width: 150px;
            padding: 5px 10px;
            display: block;
            }
        
        &:hover {
            background-color: rgba(0,0,0,0.2);
        }
    }

    }
  }

  .lang-menu:hover ul {
      display: block;
  }
`;
