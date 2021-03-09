import React from "react";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import { styled } from "@material-ui/core";
import { color } from "../../theme/Color";
import { useTheme } from "../../theme";

export const MuiRadio = styled(({ ...props }: RadioProps) => (
  <Radio
    color="default"
    disableRipple
    icon={
      props.readOnly || props.disabled ? (
        <RadioInActiveDisabledIcon />
      ) : (
        <RadioInActiveIcon />
      )
    }
    checkedIcon={
      props.readOnly || props.disabled ? (
        <RadioInActiveDisabledIcon />
      ) : (
        <RadioActiveIcon />
      )
    }
    {...props}
  />
))({
  padding: 0,
  marginRight: 10,
});

const RadioActiveIcon = styled(({ ...other }) => {
  const { themeType } = useTheme()!;
  if (themeType === "light") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 19.2C15.9765 19.2 19.2 15.9765 19.2 12C19.2 8.02355 15.9765 4.8 12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9765 8.02355 19.2 12 19.2Z"
          fill="#82CCA0"
        />
      </svg>
    );
  }
  return (
    <svg {...other} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 19.2C15.9765 19.2 19.2 15.9765 19.2 12C19.2 8.02355 15.9765 4.8 12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9765 8.02355 19.2 12 19.2Z"
        fill="#A2FFC8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 19.2C15.9765 19.2 19.2 15.9765 19.2 12C19.2 8.02355 15.9765 4.8 12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9765 8.02355 19.2 12 19.2Z"
        fill="black"
        fillOpacity="0.05"
      />
    </svg>
  );
})({});
const RadioInActiveIcon = styled(({ ...other }) => {
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
      <circle
        cx="12"
        cy="12"
        r="11.5"
        stroke={
          themeType === "light" ? color.primaryInputBorder : color.primaryLight
        }
      />
    </svg>
  );
})({});
const RadioInActiveDisabledIcon = styled(({ ...other }) => (
  <svg
    {...other}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="11.5"
      fill={color.primaryLight}
      fillOpacity="0.7"
      stroke={color.primaryLight}
    />
  </svg>
))({});
