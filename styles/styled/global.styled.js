import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  body{
    background: #262632;
    color: #fff;
  }

  .loading-box{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00000047;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 15px;
    letter-spacing: 2px;
    color: #a5d4d6;
  }

  /* variables */
`


export default GlobalStyles
