/* eslint-disable react/destructuring-assignment */
import { styled } from "@material-ui/core";
import React from "react";
import { Container } from "./Container";

interface SectionProps {
  className?: string;
}

export const Section: React.FC<SectionProps> = (props) => {
  return (
    <FullWidthSection {...props}>
      <Container>{props.children}</Container>
    </FullWidthSection>
  );
};

const FullWidthSection = styled("section")(({ theme }) => ({
  padding: "50px 0",
  "&.bg-white": {
    background: theme.palette.common.white,
  },
  "&.bg-gray": {
    background: theme.palette.grey[300],
  },
  "&.bg-light": {
    background: "#eaecff",
  },
  "&.bg-primary": {
    background: theme.palette.primary.main,
  },
  "&.bg-secondary": {
    background: theme.palette.secondary.main,
  },
  "&.bg-primary, &.bg-secondary": {
    color: theme.palette.common.white,
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      color: "inherit",
    },
  },
  "&.last-section": {
    paddingBottom: "120px",
    marginBottom: "-70px",
  },
}));
