import React from "react";
import { BoldHeading, StyledCat, StyledContent, StyledHome } from "../styles/Home.styled";
import { faCat } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <StyledHome>
      <StyledContent>
        <div>
          <h1>Hi, I'm Cameron.</h1>
          <BoldHeading>A student.</BoldHeading>
        </div>
        <div>
          <StyledCat
            icon={faCat}
          />
        </div>
      </StyledContent>
    </StyledHome>
  );
};
