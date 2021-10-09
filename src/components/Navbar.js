import React from "react";
import { Logo } from "./Logo";
import {
  StyledHeader,
  StyledLinks,
  StyledNavbar,
} from "./styles/Navbar.styled";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <StyledHeader>
      <StyledNavbar>
        <div>
          <Link to="/">
            <Logo width={100} color="white" />
          </Link>
        </div>
        <StyledLinks>
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/experience">
              <li>Experience</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/misc">
              <li>Misc.</li>
            </Link>
          </ul>
        </StyledLinks>
      </StyledNavbar>
    </StyledHeader>
  );
}
