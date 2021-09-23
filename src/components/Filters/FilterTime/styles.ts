import styled from "styled-components";

export const Container = styled.div`
    width: 16%;
    display:flex;
    align-items: center;

    .texto{
    }

    .arrow{
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;

export const ContFilter = styled.div`
  height: 25px;
  box-sizing: border-box;
  width: 125px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #00579D;
  border-radius: 3px;
  color: #fff;
  z-index:1000;
  margin-left: 5px;

  a {
    text-decoration: none;
    color: #fff;
  }

  .lang-menu {
      width: 150px;
      text-align: right;
      font-weight: 540;
      position: relative;
  }

  .lang-menu .selected-lang {
      display: flex;
      justify-content: space-between;
      line-height: 1.7;
      cursor: pointer;
      padding-left: 10px;
  }

  .lang-menu ul {
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
  }


  .lang-menu ul li {
      list-style: none;
      text-align: left;
      display: flex;
      justify-content: space-between;
  }

  .lang-menu ul li a {
      text-decoration: none;
      width: 150px;
      padding: 5px 10px;
      display: block;
  }

  .lang-menu ul li:hover {
      background-color: rgba(0,0,0,0.2);
  }

  .lang-menu:hover ul {
      display: block;
  }
`;
