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
`;

export default GlobalStyles;
