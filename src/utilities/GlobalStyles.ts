import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');

  html {
      font-size: 62.5%;
      font-family: 'KoHo', sans-serif;
  }

   body {
    overflow: hidden;
    margin: 0;
    max-height: ${window.outerHeight}px;
    max-width: ${window.innerWidth}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, .15),
      rgba(0, 0, 0, .0),
      rgba(0, 0, 0, .15)
    );
    background-repeat: no-repeat;
  }
  
  button {
      cursor: pointer;
  }
`;
