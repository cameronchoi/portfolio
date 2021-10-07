import React, { useState, useEffect } from "react";
import { BoldHeading, StyledContent, StyledHome } from "../styles/Home.styled";

const availableRoles = [" student.", "n engineer.", " consultant."];
let roleIndex = 0;
let wordIndex = 0;
let direction = "right";

export const Home = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const type = () => {
      if (direction === "right") {
        wordIndex += 1;
        if (wordIndex > availableRoles[roleIndex].length) {
          wordIndex -= 2;
          direction = "left";
        }
      } else {
        wordIndex -= 1;
        if (wordIndex < 0) {
          wordIndex += 2;
          roleIndex += 1;
          if (roleIndex > availableRoles.length - 1) {
            roleIndex = 0;
          }
          direction = "right";
        }
      }

      setRole(availableRoles[roleIndex].slice(0, wordIndex));
    };

    const timer = setInterval(() => {
      type();
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledHome>
      <StyledContent>
        <h1>Hi, I'm Cameron.</h1>
        <BoldHeading>{"A" + role}</BoldHeading>
      </StyledContent>
      {/* <StyledIcon icon={faChevronDown} /> */}
    </StyledHome>
  );
};
