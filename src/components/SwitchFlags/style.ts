import styled from "styled-components";

export const Container = styled.header`
  height: 41px;
  box-sizing: border-box;
  width: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #0091BD;
  margin-right: 0px;

  svg{
    margin-top: 7px;
    font-size:20px;
  }

  a {
    text-decoration: none;
    color: #0091BD;
  }

  .lang-menu {
      width: 100px;
      text-align: right;
      font-weight: bold;
      position: relative;
  }

  .lang-menu .selected-lang {
      display: flex;
      justify-content: space-between;
      line-height: 2;
      cursor: pointer;
  }

  .lang-menu .selected-lang:before {
      content: '';
      display: inline-block;
      width: 32px;
      height: 32px;
      background-image: url('https://www.countryflags.io/br/flat/32.png');
      background-size: contain;
      background-repeat: no-repeat;
  }

  .lang-menu ul {
      margin: 0;
      padding: 0;
      display: none;
      background-color: #fff;
      border: 1px solid #f8f8f8;
      position: absolute;
      top: 41px;
      right: 0px;
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
    background-color: #f2f2f2;
  }

  .lang-menu ul li a:before {
      content: '';
      display: inline-block;
      width: 25px;
      height: 25px;
      vertical-align: middle;
      margin-right: 10px;
      background-size: contain;
      background-repeat: no-repeat;
  }

  .de:before {
      background-image: url('https://www.countryflags.io/de/flat/32.png');
  }

  .br:before {
      background-image: url('https://www.countryflags.io/br/flat/32.png');
  }

  .en:before {
      background-image: url('https://www.countryflags.io/us/flat/32.png');
  }

  .fr:before {
      background-image: url('https://www.countryflags.io/fr/flat/32.png');
  }

  .ar:before {
      background-image: url('https://www.countryflags.io/cn/flat/32.png');
  }

  .lang-menu:hover ul {
      display: block;
  }
`;
