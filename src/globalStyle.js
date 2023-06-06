import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    }

    :root {
    --black-color:#1E1E1E;
    --darkgray-color:#3A3A3A;
    --gray-color:#DADADA;
    --lightgray-color:#F4F4F4;
    --main-color:#0064FF;
    }

    html, body {
    font-family: 'Pretendard-Regular', -apple-system, Helvetica Neue, sans-serif;
    color: var(--black-color);
  }

`;
export { GlobalStyle };
