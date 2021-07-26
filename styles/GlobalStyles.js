import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
    background: #F4E640;
    font-family: 'DM Sans', sans-serif;
  }

  p, span{
    line-height: 1.5;
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;
