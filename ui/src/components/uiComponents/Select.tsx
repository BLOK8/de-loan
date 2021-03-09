import Select, { SelectProps } from "@material-ui/core/Select";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Theme } from "@material-ui/core";

export const MuiSelect = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
    height: "40px",
    padding: "0px 15px 0px",
    boxSizing: "border-box",
    lineHeight: 1,
    borderRadius: "4px",
    background: "transparent !important",
    "&:focus": {
      color: theme.palette.primary.main,
    },
    '&[aria-pressed="true"] + input + .MuiSelect-icon': {
      transform: "rotate(180deg)",
    },

    "& .MuiFilledInput-input, & .MuiInputLabel-root": {
      fontSize: theme.typography.fontSize,
    },
    "&:focus .MuiSelect-icon": {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    width: "27px",
    height: "28px",
    color: "#5E6871",
  },
  select: {
    padding: "0px 15px 0px",
  },
}))((props: SelectProps) => (
  <Select
    {...props}
    variant="filled"
    MenuProps={{
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left",
      },
      getContentAnchorEl: null,
      ...props.MenuProps,
    }}
  />
));
