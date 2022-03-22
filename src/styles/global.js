import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFF8F4;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #000000;
  }

  button {
    border: none;
    background-color: inherit;
  }

  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 138%;
  }
`;

export default GlobalStyle;
