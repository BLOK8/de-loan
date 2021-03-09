import React from "react";
import { styled } from "@material-ui/core";

interface HTMLProps {}
export const FormRow = styled(({ ...HTMLProps }: HTMLProps) => (
  <div {...HTMLProps} />
))({
  marginBottom: 32,
  "& h5": {
    marginBottom: 40,
  },
});

export const NameSection = styled("div")({
  display: "grid",
  gridTemplateColumns: "100px 1fr 1fr 1fr",
  alignItems: "flex-start",
  gridGap: "0 17px",
  "& .MuiFormControl-fullWidth": {
    marginBottom: 18,
  },
});

export const FormGroupGrid = styled(NameSection)({
  gridTemplateColumns: "1fr 1fr",
  gridGap: "0 20px",
});

interface MobileFieldProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileField = styled(
  ({ className, ...props }: MobileFieldProps) => (
    <div {...props} className={`mobile-field ${className}`}>
      <label>Mobile*</label>
      {props.children}
    </div>
  )
)({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  marginBottom: "23px",
  "& > label": {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1,
  },
  "& .MuiFormControl-root": {
    marginBottom: "0 !important",
    "& label": {
      display: "none",
    },
    "& .input-wrap": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
});
