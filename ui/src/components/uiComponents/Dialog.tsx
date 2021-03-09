/* eslint-disable import/no-unresolved */
import {
  Fade,
  FadeProps,
  Typography,
  DialogContent,
  IconButton,
  DialogActions,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import FocusLock from "react-focus-lock";
import CloseIcon from "@material-ui/icons/Close";
import { styled } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";
import { color } from "../../theme/Color";

const Transition = React.forwardRef<unknown, TransitionProps>(
  function transistion(props: FadeProps, ref) {
    return <Fade in ref={ref} {...props} />;
  }
);

interface MuiDialogProps extends DialogProps {
  onClose?: () => void;
  heading: string | React.ReactNode;
  content?: React.ReactNode;
  children: React.ReactNode;
  dialogAction?: React.ReactNode;
  defaultStyle?: boolean;
}

export const MuiDialog = styled(
  ({
    onClose,
    heading,
    content,
    children,
    dialogAction,
    defaultStyle,
    ...other
  }: MuiDialogProps) => (
    <Dialog TransitionComponent={Transition} keepMounted {...other}>
      <MuiDialogTitle disableTypography>
        <Typography variant="h6">{heading}</Typography>
        {onClose ? (
          <FocusLock group="dialog">
            <CloseButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </FocusLock>
        ) : null}
      </MuiDialogTitle>

      {defaultStyle ? (
        <FocusLock group="dialog">{children}</FocusLock>
      ) : (
        <>
          <DialogContent>
            <FocusLock group="dialog">
              {content && <p>{content}</p>}
              {children}
            </FocusLock>
          </DialogContent>

          {dialogAction && (
            <DialogActions>
              <FocusLock group="dialog">{dialogAction}</FocusLock>
            </DialogActions>
          )}
        </>
      )}
    </Dialog>
  )
)(({ theme }) => ({
  "& .MuiPaper-root": {
    background: color.white,
    color: theme.palette.grey[800],
    fontSize: 12,
    maxHeight: "90vh",
    width: "100%",
    "& p:not([class])": {
      marginBottom: 23,
    },
    "&.MuiDialog-paperWidthSm": {
      maxWidth: 540,
    },
    "&.MuiDialog-paperWidthMd": {
      maxWidth: 636,
    },
    "&.MuiDialog-paperWidthLg": {
      maxWidth: 929,
    },
    "& h2, & h3, & h4, & h5, & h6": {
      color: color.black800,
    },
  },
  "& .MuiDialogTitle-root": {
    background: theme.palette.grey[800],
    marginBottom: 15,
    color: color.white,
    minHeight: 72,
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& .MuiTypography-root": {
      fontSize: 18,
      margin: 0,
      color: color.white,
    },
  },
  "& .MuiDialogActions-root": {
    padding: "18px 24px",
    "& button": {
      minWidth: 110,
      "&:nth-child(2)": {
        marginLeft: 22,
      },
      "&.MuiButton-containedPrimary": {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    },
  },
  "& .mobile-field": {
    color: theme.palette.grey[800],
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: 0,
  bottom: 0,
  margin: "auto",
  height: 50,
}));
