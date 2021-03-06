import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        width: 100%;
        font-size: 14px;
    }

    * {
        box-sizing: border-box;
    }
`;
