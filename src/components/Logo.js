import React from "react";
import logo1 from "../images/logo1.svg";
import { StyledLogo } from "./styles/Logo.styled";

export const Logo = ({ height, width, color }) => {
  return (
    <StyledLogo
      src={logo1}
      alt="Logo"
      height={height}
      width={width}
      color={color}
    />
  );
};
