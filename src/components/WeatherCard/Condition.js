import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
  return (
    <>
      <Reel theme={realStyle} text={`${temp}`}></Reel>
      <State>{condition}</State>
    </>
  );
};

export default Condition;

const State = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 0.8rem;
`;

const realStyle = {
  group: {
    transitionDelay: "0ms",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
  },
  number: {
    height: "1em",
    fontFamily: "Fira Sans, sans-serif",
  },
  reel: {
    height: "1em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    fontSize: "45px",
    fontWeight: "300",
    lineHeight: "0.90em",
  },
};
