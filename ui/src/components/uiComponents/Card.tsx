import React from "react";
import { styled } from "@material-ui/core";
import { color } from "../../theme/Color";

interface CardHeaderProps {
  heading: string;
  subHeading?: string;
  rightSection?: React.ReactNode;
  className?: string;
}

export const CardHeader = styled(
  ({ heading, subHeading, rightSection, ...HTMLProps }: CardHeaderProps) => (
    <div {...HTMLProps}>
      <h3>
        {heading} {subHeading && <small>{subHeading}</small>}
      </h3>
      {rightSection}
    </div>
  )
)({
  display: "flex",
  marginBottom: 25,
  justifyContent: "space-between",
  alignItems: "baseline",
  "& .MuiButton-contained": {
    padding: "6px 10px",
    minWidth: "128px",
    fontSize: 14,
  },
  "& .MuiButton-text": {
    padding: "4px 6px",
    fontSize: 14,
    minWidth: 0,
  },
  "& h3": {
    marginBottom: 0,
    "& small": {
      fontSize: 10,
      opacity: 0.5,
      marginLeft: 10,
      verticalAlign: "bottom",
    },
  },
  "&.outside-header": {
    marginBottom: 22,
    "& h3": {
      fontSize: 18,
    },
  },
});

interface CardProps {
  className?: string;
  cardHeader?: CardHeaderProps;
}

export const Card = styled(({ className, cardHeader, ...rest }: CardProps) => (
  <>
    {cardHeader && <CardHeader className="outside-header" {...cardHeader} />}
    <div className={`card ${className}`} {...rest} />
  </>
))(({ theme }) => ({
  padding: "22px 24px",
  marginBottom: 12,
  background: color.white,
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 6,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "& .MuiButton-sizeSmall": {
    fontSize: 14,
  },
}));
