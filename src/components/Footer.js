import React from "react";
import { StyledFooter, StyledIcon } from "./styles/Footer.styled";
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { BoldLink } from "./BoldLink";

export const Footer = () => {
  return (
    <StyledFooter>
      <h3>
        Fully{" "}
        <BoldLink href="https://github.com/cameronchoi/portfolio">
          {" "}
          designed{" "}
        </BoldLink>
        and
        <BoldLink href="https://github.com/cameronchoi/portfolio">
          {" "}
          developed{" "}
        </BoldLink>
        by Cameron Choi
      </h3>
      <div>
        <a
          href="https://github.com/cameronchoi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/cameronchoi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon={faLinkedinIn} size="3x" />
        </a>
        <a
          href="https://cameronchoi.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon={faMediumM} size="3x" />
        </a>
        <a href="mailto:cameronjchoi@gmail.com">
          <StyledIcon icon={faEnvelope} size="3x" />
        </a>
      </div>
    </StyledFooter>
  );
};
