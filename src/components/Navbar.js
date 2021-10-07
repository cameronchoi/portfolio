import React from "react";
import { Logo } from "./Logo";
import { StyledHeader, StyledLinks, StyledNavbar } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledHeader>
      <StyledNavbar>
        <div>
          <a>
            <Logo width={100} color="white" />
          </a>
        </div>
        <StyledLinks>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Misc.</li>
          </ul>
        </StyledLinks>
      </StyledNavbar>
    </StyledHeader>
  );
}
