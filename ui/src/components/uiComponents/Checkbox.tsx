import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { styled } from "@material-ui/core";
import React from "react";
import { color } from "../../theme/Color";
import { useTheme } from "../../theme";

export const MuiCheckbox = styled(({ ...props }: CheckboxProps) => (
  <Checkbox
    color="default"
    icon={
      props.readOnly || props.disabled ? (
        <CheckBoxInActiveDisabledIcon />
      ) : (
        <CheckBoxInActiveIcon />
      )
    }
    checkedIcon={
      props.readOnly || props.disabled ? (
        <CheckBoxActiveDisabledIcon />
      ) : (
        <CheckBoxActiveIcon />
      )
    }
    {...props}
  />
))({
  marginLeft: -9,
  marginRight: 10,
});

export const CheckBoxActiveIcon = styled(({ ...other }) => {
  const { themeType } = useTheme()!;
  return (
    <svg
      {...other}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="4"
        fill={themeType === "light" ? color.primaryInputBorder : color.primary}
      />
      <rect width="24" height="24" rx="4" fill="black" fillOpacity="0.05" />
      <path
        d="M18.3927 5.60657L9.2203 18.3923L5.60693 14.779"
        stroke={color.black800}
        strokeWidth="2"
      />
    </svg>
  );
})({});
export const CheckBoxInActiveIcon = styled(({ ...other }) => {
  const { themeType } = useTheme()!;
  return (
    <svg
      {...other}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="3.5"
        stroke={
          themeType === "light" ? color.primaryInputBorder : color.primaryLight
        }
      />
    </svg>
  );
})({});
const CheckBoxInActiveDisabledIcon = styled(({ ...other }) => (
  <svg
    {...other}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="23"
      height="23"
      rx="3.5"
      fill="#D0D9E2"
      fillOpacity="0.7"
      stroke={color.primaryLight}
    />
  </svg>
))({});
const CheckBoxActiveDisabledIcon = styled(({ ...other }) => (
  <svg
    {...other}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="23"
      height="23"
      rx="3.5"
      fill="#D0D9E2"
      fillOpacity="0.7"
      stroke={color.primaryLight}
    />
    <path
      d="M18.3929 5.60657L9.22054 18.3923L5.60718 14.779"
      stroke={color.black800}
      strokeWidth="2"
    />
  </svg>
))({});
