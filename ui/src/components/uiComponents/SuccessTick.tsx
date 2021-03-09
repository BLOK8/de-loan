import React from "react";
import { styled } from "@material-ui/styles";
import { color } from "../../theme/Color";

export const SuccessTick = styled(({ ...HTMLProps }) => (
  <svg
    {...HTMLProps}
    width="126"
    height="126"
    viewBox="0 0 126 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.1">
      <circle cx="63" cy="63" r="63" fill="#22356a" />
      <circle cx="63" cy="63" r="63" fill="black" fillOpacity="0.05" />
    </g>
    <g opacity="0.2">
      <circle cx="63" cy="63" r="55" fill="#22356a" />
      <circle cx="63" cy="63" r="55" fill="black" fillOpacity="0.05" />
    </g>
    <circle cx="63" cy="63" r="45" fill="#22356a" />
    <circle cx="63" cy="63" r="45" fill="black" fillOpacity="0.05" />
    <path
      d="M79.6116 42.7869L53.1951 79.6099L42.7886 69.2034"
      stroke={color.black800}
      strokeWidth="3"
    />
  </svg>
))({
  marginBottom: 26,
  strokeDasharray: "130px",
  strokeDashoffset: "191px",
  opacity: 0,
  animation: "tickAnim 1s .5s",
  animationFillMode: "forwards",
});
