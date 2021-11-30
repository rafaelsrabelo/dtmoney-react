import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E5E5E5;
        --red: #e52e4d;
        --blue: #5429CC;

        --blue-light: #6933ff;

        --text-light: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15 px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14 px
        }
    }

    // REM = 1rem = 16px

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;