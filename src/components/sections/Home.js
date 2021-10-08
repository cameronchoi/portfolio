import React, { useState, useEffect } from "react";
import { BoldHeading, StyledHome } from "../styles/Home.styled";

const availableRoles = [
  "A\u00A0student.",
  "An\u00A0engineer.",
  "A\u00A0consultant.",
  "From\u00A0Sydney.",
  "From\u00A0Seoul.",
];

export const Home = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let wordIndex = 0;
    let direction = "right";
    const type = () => {
      if (direction === "right") {
        wordIndex += 1;
        if (wordIndex > availableRoles[roleIndex].length) {
          wordIndex -= 2;
          direction = "left";
          setTimeout(() => {
            setRole(availableRoles[roleIndex].slice(0, wordIndex));
            type();
          }, 1000);
          return;
        }
        setTimeout(type, 80);
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
        setTimeout(type, 80);
      }
      setRole(availableRoles[roleIndex].slice(0, wordIndex));
    };

    type();
    return () => {};
  }, []);

  return (
    <StyledHome>
      <h1>Hi, I'm Cameron.</h1>
      <div>
        {role && <BoldHeading>{role}</BoldHeading>}
      </div>
    </StyledHome>
  );
};
