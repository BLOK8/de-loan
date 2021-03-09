import { styled, withStyles } from "@material-ui/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import React, { ElementType } from "react";
import MuiIconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Theme } from "@material-ui/core";
import { theme } from "../../theme/Theme";
import { dashboardColor, color } from "../../theme/Color";

interface MuiButtonProps extends ButtonProps {
  themeType?: "dark" | "light";
  loader?: boolean;
  component?: ElementType;
}

export const MuiButton = styled(
  ({ loader, themeType, ...other }: MuiButtonProps) => (
    <Button variant="contained" color="primary" {...other}>
      {!loader && other.children}
      {loader && <CircularProgress size={15} />}
    </Button>
  )
)({
  fontWeight: 600,
  padding: (props: MuiButtonProps) =>
    props.size === "small" ? "6px 30px" : "13px 46px",
  fontSize: 14,
  textTransform: "inherit",
  minHeight: (props: MuiButtonProps) =>
    // eslint-disable-next-line no-nested-ternary
    props.loader ? (props.size === "small" ? 36 : 48) : "",
  boxShadow: (props: MuiButtonProps) =>
    theme.palette.background.default === dashboardColor.bg ||
    props.themeType === "light"
      ? "0px 4px 4px rgba(0, 0, 0, 0.25) !important"
      : "none !important",
  minWidth: (props: MuiButtonProps) => (props.size === "small" ? 50 : "150px"),
  letterSpacing: "0.16px",
  "&.Mui-disabled": {
    boxShadow: "none !important",
  },
  "& .MuiCircularProgress-colorPrimary": {
    color: (props: MuiButtonProps) =>
      props.themeType === "light" ? theme.palette.grey[800] : color.green,
  },
  "&.MuiButton-outlinedSecondary": {},

  "&.MuiButton-containedSecondary": {
    background: theme.palette.secondary.main,
    color: color.white,
  },
  "&.MuiButton-containedPrimary": {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.light,
    },
    "&.Mui-disabled": {
      background: (props: MuiButtonProps) =>
        props.themeType === "light"
          ? theme.palette.grey[300]
          : theme.palette.primary.light,
      color: (props: MuiButtonProps) =>
        props.themeType === "light" ? color.white : theme.palette.grey[500],
      "& .MuiCircularProgress-colorPrimary": {
        color: theme.palette.grey[800],
      },
    },
  },
  "&.MuiButton-outlinedPrimary": {
    border: "1px solid",
    padding: (props: MuiButtonProps) =>
      props.size === "small" ? "5px 30px" : "12px 46px",
    borderColor: (props: MuiButtonProps) =>
      props.themeType === "light"
        ? theme.color.gray.main
        : theme.palette.primary.main,
    color: (props: MuiButtonProps) =>
      props.themeType === "light" ? theme.palette.grey[800] : color.white,
    "&:hover": {
      borderColor: theme.palette.primary.light,
      background: theme.palette.primary.light,
      color: theme.palette.grey[800],
    },
    "&.Mui-disabled": {
      borderColor: (props: MuiButtonProps) =>
        props.themeType === "light"
          ? theme.palette.grey[500]
          : theme.color.primary.main,
      color: (props: MuiButtonProps) =>
        props.themeType === "light"
          ? theme.palette.grey[500]
          : theme.color.primary.main,
    },
  },
  "&.MuiButton-textPrimary, &.MuiButton-text": {
    color: (props: MuiButtonProps) =>
      props.themeType === "light" ? theme.palette.grey[800] : color.white,
    border: 0,
    padding: (props: MuiButtonProps) =>
      props.size === "small" ? "6px 15px" : "13px 26px",
    "&:hover": {
      background: theme.palette.primary.light,
      color: (props: MuiButtonProps) =>
        props.themeType === "light" ? theme.palette.grey[800] : color.white,
    },
    "&.Mui-disabled": {
      color: (props: MuiButtonProps) =>
        props.themeType === "light"
          ? theme.palette.grey[500]
          : theme.color.disabledColor,
    },
    "&:not(:hover), &:not(.Mui-disabled)": {
      boxShadow: "none !important",
    },
  },
  "&.MuiButton-textPrimary": {
    color: (props: MuiButtonProps) =>
      props.themeType === "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
  },
  background: (props: MuiButtonProps) =>
    props.variant && props.variant !== "text" ? "" : "transparent",
});

export const BtnGroup = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& button, & .MuiButton-root": {
    marginLeft: "20px",
  },
  "&.align-left": {
    justifyContent: "flex-start",
    "& button, & .MuiButton-root": {
      marginLeft: "0px",
      marginRight: 20,
    },
  },
  "&.align-center": {
    justifyContent: "center",
    "& button + button, & .MuiButton-root + .MuiButton-root": {
      marginLeft: "20px",
    },
  },
});

export const IconButton = withStyles((muiTheme: Theme) => ({
  root: {
    color: muiTheme.palette.grey[800],
    width: 36,
    height: 36,
    padding: 0,
    borderRadius: 4,
    border: `1px solid ${muiTheme.palette.grey[800]}`,
    "&:hover": {
      background: muiTheme.palette.primary.light,
      borderColor: muiTheme.palette.primary.light,
    },
  },
  colorSecondary: {
    borderColor: "transparent",
    background: muiTheme.palette.grey[800],
    color: muiTheme.palette.common.white,
  },
  colorPrimary: {
    borderColor: "transparent",
    background: muiTheme.palette.primary.light,
    color: muiTheme.palette.grey[800],
  },
}))((props: IconButtonProps) => {
  return <MuiIconButton {...props} />;
});
