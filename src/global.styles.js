import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    background-color: #F1EFE1;
    font-family: Helvetica Neue, Helvetica,
    Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
    letter-spacing: .015rem;
    font-weight: 400;
    line-height: 20px;
    font-size: 14px;
  }
  :root {
    --opacity: 0;
    --color: #F1EFE1;
    --scroll-top: 0;
  }
  a {
    text-decoration: none;
    cursor: default;
  }
  ul {
    list-style: none;
  }
  * ,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    max-height: 100vh;
  }
  .row {
    justify-content:center;
  }
`;

export default GlobalStyles;
