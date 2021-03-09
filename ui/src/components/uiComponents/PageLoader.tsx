import React from "react";
import { styled } from "@material-ui/core";

interface HTMLProps {}
export const PageLoader = styled(({ ...HTMLProps }: HTMLProps) => (
  <div {...HTMLProps}>{/* <CircularProgress disableShrink /> */}</div>
))({
  textAlign: "center",
  padding: 40,
});
