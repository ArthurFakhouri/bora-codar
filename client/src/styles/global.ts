import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: solid 2px #7740d5;
    }

    body, input, button, textarea {
        font-size: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
    }

    @media only screen and (max-width: 600px) {
        html {
            font-size: 62.5%;
        }
    }
`