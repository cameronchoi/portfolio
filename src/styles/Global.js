import { createGlobalStyle } from "styled-components";
import fonts from "../fonts/fonts";

const GlobalStyles = createGlobalStyle`
    ${fonts}
    
    body {
        margin: 0;
        background: ${({ theme }) => theme.colors.darkSecondary};
        color: ${({ theme }) => theme.colors.darkPrimary};
        font-family: 'Glacial Indifference', 'Open Sans', sans-serif;
        font-weight: 300;
    }

    h1 {
        font-size: 120px;
        font-weight: 300;
    }

    h2 {
        font-size: 60px;
        font-weight: 300;
    }

    h3 {
        font-size: 45px;
        font-weight: 300;
    }

    a {
        color: ${({ theme }) => theme.colors.darkPrimary};
        text-decoration: none;
    }
`;

export default GlobalStyles;
