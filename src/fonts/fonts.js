import { css } from "styled-components";

import GlacialIndifferenceBoldWoff from "./GlacialIndifference-Bold.woff";
import GlacialIndifferenceBoldWoff2 from "./GlacialIndifference-Bold.woff2";
import GlacialIndifferenceRegularWoff from "./GlacialIndifference-Regular.woff";
import GlacialIndifferenceRegularWoff2 from "./GlacialIndifference-Regular.woff2";

const fontFaces = `
    @font-face {
        font-family: 'Glacial Indifference';
        src: url(${GlacialIndifferenceRegularWoff2}) format('woff2'),
        url(${GlacialIndifferenceRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Glacial Indifference';
        src: url(${GlacialIndifferenceBoldWoff2}) format('woff2'),
        url(${GlacialIndifferenceBoldWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
`;

const Fonts = css`
  ${fontFaces}
`;

export default Fonts;
