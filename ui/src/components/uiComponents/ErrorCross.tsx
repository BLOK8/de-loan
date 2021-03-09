import React from "react";
import { styled } from "@material-ui/styles";
import { color } from "../../theme/Color";

interface HTMLProps {}
export const ErrorCross = styled(({ ...HTMLProps }: HTMLProps) => (
  <svg
    {...HTMLProps}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Complete Big"
    width="126"
    height="126"
    viewBox="0 0 126 126"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.112"
        y1="0.216"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#f14f4f" />
        <stop offset="1" stopColor="#ff4040" />
      </linearGradient>
    </defs>
    <circle cx="63" cy="63" r="63" fill="#f14f4f" opacity="0.1" />
    <circle
      cx="55"
      cy="55"
      r="55"
      transform="translate(8 8)"
      fill="#f14f4f"
      opacity="0.2"
    />
    <circle
      cx="45"
      cy="45"
      r="45"
      transform="translate(18 18)"
      fill="url(#linear-gradient)"
    />
    <path
      d="M42.755,2.519,40.236,0,21.378,18.859,2.519,0,0,2.519,18.858,21.378,0,40.236l2.519,2.519L21.378,23.9,40.236,42.755l2.519-2.519L23.9,21.378Z"
      transform="translate(41.296 41.296)"
      fill={color.white}
    />
  </svg>
))({
  marginBottom: 26,
  strokeDasharray: "160px",
  strokeDashoffset: "-60px",
  opacity: 0,
  animation: "tickAnim 1s .5s",
  animationFillMode: "forwards",
});
