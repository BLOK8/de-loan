import { styled } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { MuiButton as Button } from "./Button";
import { Card } from "./Card";

interface ListItemProps {
  name: string;
  value?: string | ReactNode;
  buttonAction?: () => void;
  buttonText?: string;
  buttonDisabled?: boolean;
  rightContent?: ReactNode;
  loader?: boolean;
}
export const ListItem = styled(
  ({
    name,
    value,
    buttonAction,
    buttonText = "Change",
    buttonDisabled,
    loader,
    rightContent,
    ...HTMLProps
  }: ListItemProps) => (
    <Card {...HTMLProps}>
      <Name>
        <strong>{name}</strong>{" "}
        {typeof value === "string" ? <span>{value}</span> : value}
      </Name>
      <CompanyButtonAction>
        {rightContent || (
          <Button
            size="small"
            themeType="light"
            variant="outlined"
            color="primary"
            onClick={buttonAction}
            disabled={buttonDisabled}
            loader={loader}
          >
            {buttonText}
          </Button>
        )}
      </CompanyButtonAction>
    </Card>
  )
)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "32px",
  marginBottom: 24,
}));

const Name = styled("div")({
  "& strong": {
    marginRight: 16,
    display: "inline-block",
    minWidth: 160,
    textAlign: "left",
  },
  textAlign: "left",
  display: "flex",
});

const CompanyButtonAction = styled("div")({
  "& button": {
    marginLeft: 32,
    fontSize: 14,
    padding: "5px 19px !important",
    minWidth: 100,
  },
});
