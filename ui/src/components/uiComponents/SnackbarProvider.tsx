import React from "react";
import { withStyles, IconButton } from "@material-ui/core";
import { SnackbarProvider, SnackbarProviderProps } from "notistack";
import { styled } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import { color } from "../../theme/Color";

export const Snackbar = withStyles(() => ({
  root: {
    "& > div": {
      background: color.white,
      borderRadius: 4,
      position: "relative",
      color: "#192243",
      fontSize: 12,
      overflow: "hidden",
      padding: 18,
      boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.09)",
      "& .icon": {
        marginRight: 16,
      },
      "& .MuiIconButton-root": {
        color: "inherit !important",
        "& svg": {
          width: 20,
        },
      },
      "&:before": {
        content: '""',
        height: 4,
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        background: "#ccc",
      },
    },
  },
  variantSuccess: {
    "&:before": {
      background:
        "linear-gradient(122.08deg, #79EEA8 2.19%, #63F3D9 104.79%) !important",
    },
  },
  variantError: {
    "&:before": {
      background:
        "linear-gradient(158.28deg, #FD8D8D 15.71%, #F14F4F 102.92%) !important",
    },
  },
  variantWarning: {
    "&:before": {
      background:
        "linear-gradient(158.28deg, #F8CB1C 15.71%, #F69E1E 102.92%) !important",
    },
  },
  variantInfo: {},
}))(({ ...props }: SnackbarProviderProps) => {
  // add action to all snackbars
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const notistackRef = React.useRef<any>();

  return (
    <SnackbarProvider
      {...props}
      ref={notistackRef}
      preventDuplicate
      iconVariant={{
        error: <ErrorIcon className="icon" />,
        success: <SuccessIcon className="icon" />,
        warning: <WarningIcon className="icon" />,
      }}
      action={(key) => (
        <IconButton
          size="small"
          onClick={() => notistackRef!.current.closeSnackbar(key)}
        >
          <CloseIcon />
        </IconButton>
      )}
    />
  );
});

export const SuccessIcon = styled(({ ...HTMLProps }) => (
  <svg
    {...HTMLProps}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="url(#paint0_linear)" />
    <path
      d="M11.4095 4.59016L6.51755 11.4092L4.59042 9.48211"
      stroke="#192243"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0.633095"
        y1="-1.80001"
        x2="18.8927"
        y2="0.60095"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#66F6A0" />
        <stop offset="1" stopColor="#90F4E2" />
      </linearGradient>
    </defs>
  </svg>
))({});

export const ErrorIcon = styled(({ ...HTMLProps }) => (
  <svg
    {...HTMLProps}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.34375 13.6563C3.85603 15.1687 5.86272 16 8 16C10.1373 16 12.1473 15.1687 13.6563 13.6563C15.1685 12.1438 16 10.1375 16 8C16 5.86251 15.1685 3.8531 13.6563 2.34375C12.1473 0.831264 10.1373 0 8 0C5.86272 0 3.85268 0.831264 2.34375 2.34375C0.831473 3.8531 0 5.86251 0 8C0 10.1375 0.831473 12.1469 2.34375 13.6563ZM7 4C7 3.44685 7.44643 3 8 3C8.55357 3 9 3.44685 9 4V9C9 9.55315 8.55357 10 8 10C7.44643 10 7 9.55315 7 9V4ZM9 12C9 11.4468 8.55357 11 8 11C7.44643 11 7 11.4468 7 12C7 12.5532 7.44643 13 8 13C8.55357 13 9 12.5532 9 12Z"
      fill="#F14F4F"
    />
  </svg>
))({});
export const WarningIcon = styled(({ ...HTMLProps }) => (
  <svg
    {...HTMLProps}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.34375 13.6563C3.85603 15.1687 5.86272 16 8 16C10.1373 16 12.1473 15.1687 13.6563 13.6563C15.1685 12.1438 16 10.1375 16 8C16 5.86251 15.1685 3.8531 13.6563 2.34375C12.1473 0.831264 10.1373 0 8 0C5.86272 0 3.85268 0.831264 2.34375 2.34375C0.831473 3.8531 0 5.86251 0 8C0 10.1375 0.831473 12.1469 2.34375 13.6563ZM7 4C7 3.44685 7.44643 3 8 3C8.55357 3 9 3.44685 9 4V9C9 9.55315 8.55357 10 8 10C7.44643 10 7 9.55315 7 9V4ZM9 12C9 11.4468 8.55357 11 8 11C7.44643 11 7 11.4468 7 12C7 12.5532 7.44643 13 8 13C8.55357 13 9 12.5532 9 12Z"
      fill="#F14F4F"
    />
  </svg>
))({});
