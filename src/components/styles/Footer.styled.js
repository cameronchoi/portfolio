import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFooter = styled.footer`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    &:hover {
      font-weight: 500;
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin: 15px 25px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
`;
