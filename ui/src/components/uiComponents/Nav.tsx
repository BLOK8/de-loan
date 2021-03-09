import { styled } from "@material-ui/core";

export const Nav = styled("ul")(() => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  "& > li:not(:first-child)": {
    marginLeft: "40px",
  },
}));
