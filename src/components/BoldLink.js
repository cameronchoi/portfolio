import React from "react";
import { StyledBoldLink } from "./styles/BoldLink.styled";

export const BoldLink = ({href, children}) => {
  return (
    <StyledBoldLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
        {children}
    </StyledBoldLink>
  );
};
