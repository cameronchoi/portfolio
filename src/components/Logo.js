import React from "react";
import logo from "../images/logo_big.svg";
import { StyledLogo } from "./styles/Logo.styled";

export const Logo = ({ height, width, color }) => {
  return (
    <StyledLogo
      src={logo}
      alt="Logo"
      height={height}
      width={width}
      color={color}
    />
  );
};
