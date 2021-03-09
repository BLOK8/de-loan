/* eslint-disable no-nested-ternary */
import React from "react";
import { styled } from "@material-ui/core";
import { theme } from "../../theme/Theme";

export const Stepper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: 8,
  marginBottom: "64px",
  fontSize: theme.typography.fontSize,
}));

interface IStep {
  isActive: boolean;
  isComplete: boolean;
  label: string;
  themeType?: "light" | "dark";
}

export const Step = styled(
  ({
    isComplete,
    label,
    isActive,
    themeType = "dark",
    ...HTMLProps
  }: IStep) => (
    <div {...HTMLProps}>
      {isComplete && (
        <TickIcon
          className={themeType === "light" ? "icon-dark" : "icon-green"}
        />
      )}
      {label}
      <hr />
    </div>
  )
)({
  color: (props: IStep) =>
    props.isActive || props.isComplete
      ? props.themeType === "light"
        ? theme.palette.grey[800]
        : "#8DEBD4"
      : "currentColor",
  textAlign: "center",
  fontWeight: (props: IStep) =>
    props.isActive || props.isComplete ? 600 : 400,
  "& hr": {
    border: 0,
    height: 3,
    background: (props: IStep) =>
      props.isActive || props.isComplete
        ? props.themeType === "light"
          ? theme.palette.grey[800]
          : theme.color.primary.main
        : "#D0D9E2",
    display: "block",
  },
});

const TickIcon = styled(({ ...other }) => (
  <svg
    {...other}
    width="15"
    height="15"
    viewBox="0 0 15 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.171 1.32764L5.16417 16.6706L0.828125 12.3345"
      stroke="#8DEBD4"
      strokeWidth="2"
    />
  </svg>
))({
  marginRight: 10,
  width: 16,
  verticalAlign: "top",
  "&.icon-dark path": {
    stroke: theme.palette.grey[800],
  },
  "&.icon-green path": {
    stroke: theme.palette.primary.main,
  },
});
