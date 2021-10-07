import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCat = styled(FontAwesomeIcon)`
    font-size: 200px;
`
export const BoldHeading = styled.h1`
    font-weight: bold;
`
