import React from "react";
import { StyledAbout, StyledImage, StyledMain } from "../styles/About.styled";
import me from "../../images/me.png";

export const About = () => {
  return (
    <StyledAbout>
      <StyledMain>
        <div>
          <h2>About me</h2>
          <p>
            Hi, I’m Cameron. I’m a third year student at the University of
            Sydney studying Computer Science and Data Science. Currently, I also
            work full-time as a full stack engineer at Maia Financial.
          </p>
          <p>
            I’ve been programming since high school, but my passion grew when I
            attended a 6 month coding bootcamp straight in late
            2018 (you can read about it here). Since then, my biggest passion
            lies in using my knowledge and skills to bring about a genuine
            positive impact to the community around me. In my spare time, I
            serve as the Vice President of 180 Degrees Consulting (University of
            Sydney), the largest student-led consultancy targeted at nonprofits
            and social enterprises.
          </p>
        </div>
        <div>
          <StyledImage src={me} alt="Me" />
        </div>
      </StyledMain>
    </StyledAbout>
  );
};
