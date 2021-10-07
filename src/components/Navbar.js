import React from "react";
import { Logo } from "./Logo";
import { StyledHeader, StyledNavbar } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledHeader>
      <StyledNavbar>
        <div>
          <a>
            <Logo width={100} color="white" />
          </a>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Misc.</li>
          </ul>
        </div>
      </StyledNavbar>
    </StyledHeader>
  );
}
