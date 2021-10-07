import React, { useState, useEffect } from "react";
import { BoldHeading, StyledContent, StyledHome } from "../styles/Home.styled";

const availableRoles = [" student.", "n\u00A0engineer.", "\u00A0consultant."];
let roleIndex = 0;
let wordIndex = 0;
let direction = "right";

export const Home = () => {
  const [role, setRole] = useState("");
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  useEffect(() => {
    const type = () => {
      if (direction === "right") {
        wordIndex += 1;
        if (wordIndex > availableRoles[roleIndex].length) {
            wordIndex -= 2;
            direction = "left";
          setTimeout(type, 1000);
          return
        }
        setTimeout(type, 100);
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
        setTimeout(type, 100);
      }

      setRole(availableRoles[roleIndex].slice(0, wordIndex));
    };

    type()
    return () => {

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
