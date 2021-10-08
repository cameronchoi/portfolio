import React from "react";
import { StyledFooter, StyledIcon } from "./styles/Footer.styled";
import { faGithub, faLinkedinIn, faMediumM } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <StyledFooter>
      <h3>Fully designed and developed by Cameron Choi</h3>
      <div>
        <StyledIcon icon={faGithub} />
        <StyledIcon icon={faLinkedinIn} />
        <StyledIcon icon={faMediumM} />
      </div>
    </StyledFooter>
  );
};
