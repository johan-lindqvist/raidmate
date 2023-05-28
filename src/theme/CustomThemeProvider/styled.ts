import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  
  button, input {
    font-family: 'Open Sans', sans-serif;
  }
`;
