import React, {useState, useEffect} from "react";
const availableRoles = ["..."];

export const ComingSoon = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let wordIndex = 0;
    let direction = "right";
    const type = () => {
      if (direction === "right") {
        wordIndex += 1;
        if (wordIndex > availableRoles[roleIndex].length) {
          wordIndex = -1;
          setTimeout(() => {
            setRole(availableRoles[roleIndex].slice(0, wordIndex));
            type();
          }, 1000);
          return;
        }
        setTimeout(type, 500);
      }
      setRole(availableRoles[roleIndex].slice(0, wordIndex));
    };

    type();
    return () => {};
  }, []);

  return <h1>Coming soon{role}</h1>;
};
