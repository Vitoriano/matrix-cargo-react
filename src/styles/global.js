import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  html, border-style, #root {
    min-height: 100%;
  }

  body {
    background: #121212;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #121212;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

  }

  button {
    cursor: pointer;
  }

`;
