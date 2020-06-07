import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');

  html {
      font-size: 62.5%;
      font-family: 'KoHo', sans-serif;
  }

   body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
      to bottom right,
      rgb(81, 68, 255),
      rgb(88, 0, 202)
    );
    background-repeat: no-repeat;
  }
  
  button {
      cursor: pointer;
  }
`;
