import React from "react";
import { StyledAbout, StyledImage, StyledMain } from "../styles/About.styled";
import me from "../../images/me.png";
import { UnderlineLink } from "../UnderlineLink";

export const About = () => {
  return (
    <StyledAbout>
      <StyledMain>
        <div>
          <h2>About me</h2>
          <p>
            Hi, I’m Cameron. I’m a third year student at the{" "}
            <UnderlineLink href="https://www.sydney.edu.au/">
              University of Sydney
            </UnderlineLink>{" "}
            studying Computer Science and Data Science. Currently, I also work
            full-time as a full stack engineer at{" "}
            <UnderlineLink href="https://www.sydney.edu.au/">
              Maia Financial.
            </UnderlineLink>
          </p>
          <p>
            I’ve been programming since high school, but my passion grew when I
            attended a 6 month coding bootcamp in late 2018 (you can read about
            it{" "}
            <UnderlineLink href="https://cameronchoi.medium.com/my-experience-at-a-coding-bootcamp-8363373d7ef6">
              here
            </UnderlineLink>
            ). Since then, my biggest passion lies in using my knowledge and
            skills to bring about a genuine positive impact to the community
            around me. In my spare time, I serve as the Vice President of{" "}
            <UnderlineLink href="https://180dc.org/">
              {" "}
              180 Degrees Consulting
            </UnderlineLink>{" "}
            (University of Sydney), the largest student-led consultancy targeted
            at nonprofits and social enterprises.
          </p>
        </div>
        <div>
          <StyledImage src={me} alt="Me" />
        </div>
      </StyledMain>
    </StyledAbout>
  );
};
