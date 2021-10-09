import React from "react";
import { StyledUnderlineLink } from "./styles/UnderlineLink.styled";

export const UnderlineLink = ({href, children}) => {
  return (
    <StyledUnderlineLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
        {children}
    </StyledUnderlineLink>
  );
};
