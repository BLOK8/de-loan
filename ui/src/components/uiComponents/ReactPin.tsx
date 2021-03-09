import React from "react";
import { styled } from "@material-ui/core";

interface ReactPinProps {
  error?: boolean;
}
export const ReactPin = styled(({ error, ...HTMLProps }: ReactPinProps) => (
  <div {...HTMLProps} />
))(({ theme }) => ({
  marginTop: 50,
  "&.error .pincode-input-container .pincode-input-text, &.error .pincode-input-container .pincode-input-text:focus": {
    border: `2px solid ${theme.palette.error.main} !important`,
  },
  "&.disabled .pincode-input-container .pincode-input-text": {
    pointerEvents: "none",
    opacity: 0.5,
  },
  "& .pincode-input-container": {
    "& .pincode-input-text": {
      padding: "0 !important",
      margin: "0 8px !important",
      textAlign: "center",
      border: "2px solid rgba(84, 85, 87, 0.5) !important",
      background: "rgba(84, 85, 87, 0.5) !important",
      width: "96px !important",
      height: "96px !important",
      borderRadius: 8,
      fontSize: `${theme.typography.h1.fontSize} !important`,
      fontWeight: `${700} !important`,
      color: theme.palette.primary.light,
      '&[value=""]': {
        background: "transparent !important",
        borderColor: `${theme.palette.primary.light} !important`,
        borderWidth: "1px !important",
      },
      "&:focus, &[value='']:focus": {
        outline: "none",
        boxShadow: "none",
        borderColor: "rgba(84, 85, 87, 0.5) !important",
        background: "rgba(84, 85, 87, 0.5) !important",
      },
    },
  },
  "&.theme-light .pincode-input-container .pincode-input-text": {
    background: "transparent !important",
    color: `${theme.palette.grey[800]} !important`,
    "&:focus, &[value='']:focus": {
      background: "transparent !important",
      color: `${theme.palette.grey[800]} !important`,
    },
  },
}));
