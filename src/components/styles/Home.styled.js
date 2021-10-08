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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 60px;
`;

export const BoldHeading = styled.h1`
  font-weight: 500;
  margin-top: 0px;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 120px;
    border-right: 3px solid white;
    animation: blink 0.5s infinite ease;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
