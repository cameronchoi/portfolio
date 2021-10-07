import { createGlobalStyle } from "styled-components";
import { theme } from "../../styles/theme";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        background: ${({ theme }) => theme.colors.darkSecondary};
        color: ${({ theme }) => theme.colors.darkPrimary};
        font-family: 'Open Sans', sans-serif
    }
`;

export default GlobalStyles;
