import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        background: ${({ theme }) => theme.colors.darkSecondary};
        color: ${({ theme }) => theme.colors.darkPrimary};
        font-family: 'Open Sans', sans-serif
    }

    h1 {
        font-size: 70px;
        font-weight: 300;
    }
`;

export default GlobalStyles;
